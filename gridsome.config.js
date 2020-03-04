// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Bjørn',
    titleTemplate: '%s',
    plugins: [
        { use: 'gridsome-plugin-tailwindcss' },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Snippet',
                path: './content/snippets/**/*.md'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Link',
                path: './content/links/**/*.md'
            }
        }
    ],
    templates: {
        Snippet: '/snippets/:slug',
        Link: '/links/:slug'
    }
}
