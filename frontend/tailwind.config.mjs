/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			foregroundLight: 'var(--foreground-light)',
  			accentGreen: 'var(--accent-green)',
  			accentGreenLight: 'var(--accent-green-light)',
  			accentGreenLighter: 'var(--accent-green-lighter)',
  			accentGreenExtralight: 'var(--accent-green-extralight)',
  			accentGreenBg: 'var(--accent-green-bg)',
  			accentGreenDark: 'var(--accent-green-dark)',
  			accentPurple: 'var(--accent-purple)',
  			accentPurpleLight: 'var(--accent-purple-light)',
  			accentPurpleLighter: 'var(--accent-purple-lighter)',
  			accentPurpleExtralight: 'var(--accent-purple-extralight)',
  			accentPurpleBg: 'var(--accent-purple-bg)',
  			accentPurpleDark: 'var(--accent-purple-dark)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			primary: [
  				'var(--font-primary)',
  				'sans-serif'
  			],
  			secondary: [
  				'var(--font-secondary)',
  				'Helvetica'
  			],
  			tertiary: [
  				'var(--font-tertiary)',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		boxShadow: {
			green: 'var(--shadow-green)',
			purple: 'var(--shadow-purple)',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
