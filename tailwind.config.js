/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: {
                    DEFAULT: "#FFFFFF",
                    card: "#F8F9FA",
                    dark: "#09090B",
                },
                foreground: "#09090B",
                primary: {
                    DEFAULT: "#D9F347",
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#F4F4F5",
                    foreground: "#09090B",
                },
                accent: {
                    DEFAULT: "#000000",
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#71717A",
                    foreground: "#71717A",
                },
                // Custom from design.json
                text: {
                    heading: "#09090B",
                    body: "#3F3F46",
                    muted: "#71717A",
                }
            },
            fontFamily: {
                heading: ["Plus Jakarta Sans", "sans-serif"],
                body: ["Inter", "sans-serif"],
                sans: ["Inter", "sans-serif"], // default sans
            },
            borderRadius: {
                lg: "2rem", // cards
                md: "0.75rem", // inputs
                sm: "calc(var(--radius) - 4px)",
                full: "9999px", // buttons
            },
            boxShadow: {
                "card-default": "0 2px 10px -2px rgba(0,0,0,0.05)",
                "card-hover": "0 20px 40px -12px rgba(0,0,0,0.1)",
                "button-glow": "0 0 15px rgba(217,243,71,0.6)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
}
