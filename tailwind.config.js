module.exports = {
    theme: {
        extend: {},
    },
    variants: {
        borderWidth: ['responsive', 'last'],
        margin: ['responsive', 'last'],
        padding: ['responsive', 'last'],
    },
    typography: theme => ({
        default: {
            css: {
                pre: {
                    color: theme('colors.gray.800'),
                },
            },
        },
    }),
    plugins: [require('@tailwindcss/typography')],
}
