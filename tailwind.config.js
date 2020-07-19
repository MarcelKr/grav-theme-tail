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
        },
        fontFamily: {
            'sans': [
                '"Source Sans Pro"',
                '"Noto Sans"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
            ],
        },
        typography: (theme) => ({
            default: {
                css: [
                    {
                        // fontSize: rem(18),
                        a: {
                            color: theme('colors.indigo.600'),
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                                color: theme('colors.pink.600'),
                            },
                        },
                        h1: {
                            color: theme('colors.indigo.600'),
                            fontFamily: 'Montserrat'
                        },
                        h2: {
                            color: theme('colors.indigo.600'),
                            fontFamily: 'Montserrat'
                        },
                        h3: {
                            color: theme('colors.indigo.600'),
                            fontFamily: 'Montserrat'
                        },
                        h4: {
                            color: theme('colors.indigo.600'),
                            fontFamily: 'Montserrat'
                        },
                    },
                    {
                        fontSize: '18px'
                    }
                ]
            },
        })
    },
    variants: {
        margin: ['last'],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-transitions'),
    ],
    purge: {
        mode: 'all', // to purge the unused typography stuff
        content: ['./templates/**/*.html.twig'],
    },
}
