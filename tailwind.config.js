module.exports = {
    theme: {
        extend: {},
    },
    variants: {
        borderWidth: ['responsive', 'last'],
        margin: ['responsive', 'last'],
        padding: ['responsive', 'last'],
    },
    plugins: [require('@tailwindcss/typography')],
}
