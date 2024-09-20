/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,css}'],
    theme: {
        extend: {
            colors: {
                primary: {},
            },
            fontFamily: {
                sans: [],
                serif: [],
                mono: [],
            },
            fontSize: {},
            borderRadius: {},
            screens: {},
            spacing: {
                1: '0.25rem',
                2: '0.50rem',
                3: '0.75rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.75rem',
                7: '2.5rem',
                8: '3.75rem',
                9: '6.25rem',
                10: '10rem',
                11: '15rem',
            },
        },
    },
    // in order to unlock IntelliSens for the custom classes, they have to be declared in `./src/styles/custom.css` and to be registered bellow.
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.h1': {},
                '.h2': {},
                '.h3': {},
                '.h4': {},
                '.big': {},
                '.p': {},
                '.small': {},
                '.dark-color': {},
                '.light-color': {},
                '.primary-color': {},
                '.secondary-color': {},
                '.primary-button': {},
                '.secondary-button': {},
                '.primary-link': {},
                '.secondary-link': {},
            });
        },
    ],
};
