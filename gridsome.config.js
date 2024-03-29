// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Bjørn',
    titleTemplate: '%s',
    plugins: [
        {
            use: 'gridsome-plugin-fathom',
            options: {
                siteId: 'BIHBRBPS',
                host: 'bjornlindholm.com',
                debug: false,
            },
        },
        { use: 'gridsome-plugin-tailwindcss' },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Snippet',
                path: './content/snippets/**/*.md',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Link',
                path: './content/links/**/*.md',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Category',
                path: './content/categories/**/*.md',
                refs: {
                    series: 'Series',
                    articles: 'Article',
                },
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Series',
                path: './content/series/**/*.md',
                refs: {
                    category: 'Category',
                    articles: 'Article',
                },
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Article',
                path: './content/articles/**/*.md',
                refs: {
                    category: 'Category',
                    series: 'Series',
                },
            },
        },
    ],
    templates: {
        Snippet: '/snippets/:slug',
        Link: '/links/:slug',
        Category: '/:slug',
        Article: '/articles/:slug',
    },
}
