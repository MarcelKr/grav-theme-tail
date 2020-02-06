module.exports = {
    theme: {
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '-1': '-1deg',
            '0': '0',
            '45': '45deg',
            '90': '90deg',
            '180': '180deg',
        }
    },
    variants: {
        margin: ['last'],
    },
    plugins: [
        require('tailwindcss-transitions')(),
    ]
}
