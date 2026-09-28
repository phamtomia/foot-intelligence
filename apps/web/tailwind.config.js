module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pitch: '#0B1220',
        surface: '#111827',
        accent: '#22c55e',
        alert: '#f59e0b',
        danger: '#ef4444',
        primary: '#60a5fa'
      },
      boxShadow: {
        glow: '0 0 30px rgba(96, 165, 250, 0.30)',
      }
    },
  },
  plugins: [],
};
