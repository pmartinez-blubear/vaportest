import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/views/cms/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            tablet: "993px",
            mobile: "778px",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: {
                50: "#F9FAFB",
                100: "#F3F4F6",
                200: "#E5E7EB",
                300: "#D1D5DB",
                400: "#9CA3AF",
                500: "#6B7280",
                600: "#4B5563",
                700: "#374151",
                800: "#1F2937",
                900: "#111827",
            },
            purple: {
                50: "#EEF2FF",
                100: "#E0E7FF",
                200: "#C7D2FE",
                300: "#A5B4FC",
                400: "#818CF8",
                500: "#6366F1",
                600: "#3730A3",
                700: "#3730A3",
                800: "#312E81",
                900: "#240078",
            },
            yellow: {
                50: "#FFFBEB",
                100: "#FFF8E0",
                200: "#FEF2C7",
                300: "#FCEEA5",
                400: "#F8E581",
                500: "#FFE680",
                600: "#FFE060",
                700: "#FFDA40",
                800: "#FFD62E",
                900: "#FECB00",
            },
            green: {
                50: "#ECFDF5",
                100: "#D1FAE5",
                200: "#A7F3D0",
                300: "#6EE7B7",
                400: "#34D399",
                500: "#10B981",
                600: "#059669",
                700: "#047857",
                800: "#065F46",
                900: "#064E3B",
            },
            red: {
                50: "#FEF2F2",
                100: "#D1FAE5",
                200: "#FEE2E2",
                300: "#FECACA",
                400: "#FCA5A5",
                500: "#EF4444",
                600: "#DC2626",
                700: "#B91C1C",
                800: "#B91C1C",
                900: "#7F1D1D",
            },
            brown: {
                50: "#FFFBEB",
                100: "#FEF3C7",
                200: "#FDE68A",
                300: "#FCD34D",
                400: "#FBBF24",
                500: "#F59E0B",
                600: "#D97706",
                700: "#B45309",
                800: "#92400E",
                900: "#78350F",
            },
            blue: {
                50: "#EFF6FF",
                100: "#DBEAFE",
                200: "#BFDBFE",
                300: "#93C5FD",
                400: "#60A5FA",
                500: "#3B82F6",
                600: "#2563EB",
                700: "#1D4ED8",
                800: "#1E40AF",
                900: "#1E3A8A",
            },
            
        },
        aspectRatio: {
            "4/3": "4 / 3",
            "16/5": "16 / 5",
        },
    },

    plugins: [forms, typography],
};
