/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundLight: 'var(--foreground-light)',
        accentGreen: "var(--accent-green)",
        accentGreenLight: "var(--accent-green-light)",
        accentGreenLighter: "var(--accent-green-lighter)",
        accentGreenExtralight: "var(--accent-green-extralight)",
        accentGreenBg: "var(--accent-green-bg)",
        accentGreenDark: "var(--accent-green-dark)",
        accentPurple: "var(--accent-purple)",
        accentPurpleLight: "var(--accent-purple-light)",
        accentPurpleLighter: "var(--accent-purple-lighter)",
        accentPurpleExtralight: "var(--accent-purple-extralight)",
        accentPurpleBg: "var(--accent-purple-bg)",
        accentPurpleDark: "var(--accent-purple-dark)",
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'Helvetica'],
        tertiary: ['var(--font-tertiary)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
