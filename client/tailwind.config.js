/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#050B15', // Deeper midnight blue
        'secondary': '#0F172A',
        'accent-purple': '#8B5CF6',
        'accent-blue': '#0EA5E9',
        'accent-cyan': '#22D3EE',
        'card-bg': 'rgba(15, 23, 42, 0.6)',
        'blue-structure': '#1E40AF',
        'blue-soft': '#60A5FA',
        'success': '#10B981',
        'danger': '#EF4444',
        'warning': '#F59E0B',
        'text-primary': '#F8FAFC',
        'text-muted': '#94A3B8',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, #8B5CF6, #6366F1, #0EA5E9)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'mesh-gradient': 'radial-gradient(circle at 50% 50%, #0F172A 0%, #050B15 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-inner': 'inset 0 0 20px 0 rgba(255, 255, 255, 0.05)',
        'ai-glow': '0 0 40px rgba(139, 92, 246, 0.2)',
        'ai-glow-strong': '0 0 60px rgba(139, 92, 246, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-aura': 'pulse-aura 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-aura': {
          '0%, 100%': { opacity: 0.1, transform: 'scale(1)' },
          '50%': { opacity: 0.3, transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
