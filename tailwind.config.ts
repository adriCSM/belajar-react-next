import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        register: 'url("/images/img-register.jpg")',
        igd: 'url("/images/img-igd.jpg")',
        'rawat-jalan': 'url("/images/img-rawatjalan.jpg")',
        'rawat-inap': 'url("/images/img-rawatinap.jpg")',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
