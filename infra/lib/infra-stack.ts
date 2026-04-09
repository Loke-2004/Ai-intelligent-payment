import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. DynamoDB Table for Transactions
    const transactionsTable = new dynamodb.Table(this, 'TransactionsTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    // 2. Lambda Function for AI Orchestration
    const paymentLambda = new lambda.Function(this, 'PaymentLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      environment: {
        TABLE_NAME: transactionsTable.tableName,
      },
    });

    transactionsTable.grantReadWriteData(paymentLambda);

    // 3. API Gateway
    const api = new apigateway.RestApi(this, 'PaymentApi', {
      restApiName: 'Payment Orcherstration Service',
      description: 'API for Intelligent Payment Routing and Fraud Prevention',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
      },
    });

    const payments = api.root.addResource('payments');
    payments.addMethod('POST', new apigateway.LambdaIntegration(paymentLambda));
    payments.addMethod('GET', new apigateway.LambdaIntegration(paymentLambda));

    // 4. S3 Bucket for Static Website
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      bucketName: process.env.S3_BUCKET_NAME,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    // Explicitly create OAI
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OAI');
    siteBucket.grantRead(originAccessIdentity);

    // 5. CloudFront Distribution
    const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(siteBucket, { originAccessIdentity }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    // Outputs
    new cdk.CfnOutput(this, 'ApiUrl', { value: api.url });
    new cdk.CfnOutput(this, 'CloudFrontUrl', { value: `https://${distribution.distributionDomainName}` });
    new cdk.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });
  }
}
