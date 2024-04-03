/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/app/(pages)/shipping/ShippingTable/index.tsx',
    './src/**/**/**/**.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**.{js,ts,jsx,tsx,mdx}',
    './src/**/**.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  blocklist: ['table'],
}
