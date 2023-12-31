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
                'custom-hover-color': '#282e34',
                'custom-bg-color': '#24292e',
                'root-color' : '#02010a',
                'main-color' : '#04052e',
                'sub-color' : '#140152',
                'light-color' : '#22007c',
            },
        },
    },
    plugins: [],
}

