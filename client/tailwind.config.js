/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B1F3A',
        'card-bg': 'rgba(255,255,255,0.05)',
        'blue-structure': '#1E3A8A',
        'blue-soft': '#3B82F6',
        'success': '#10B981',
        'danger': '#EF4444',
        'warning': '#F59E0B',
        'text-primary': '#F1F5F9',
        'text-muted': '#94A3B8',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, #7C3AED, #6366F1)',
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(0,0,0,0.3)',
        'ai-glow': '0 0 20px rgba(124,58,237,0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
