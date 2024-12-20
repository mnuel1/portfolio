/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            
            fontFamily: {
                // sans: ["Poppins", "sans-serif"],
            },            
            scrollBehavior: {
                smooth: 'smooth',
            } ,
            backgroundColor: {
                'primary': "#F4ABC4",
                'h-primary' : "#b84b7e",                
            },
            colors: {
                'dark' :"#060930",
                'light' : "#F4ABC4",
                'h-light' : "#b84b7e",
            }
        },
    },
    plugins: [],
}

