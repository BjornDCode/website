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
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Category',
                path: './content/categories/**/*.md',
                refs: {
                    series: 'Series'
                }
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Series',
                path: './content/series/**/*.md',
                refs: {
                    category: 'Category'
                }
            }
        }
    ],
    templates: {
        Snippet: '/snippets/:slug',
        Link: '/links/:slug',
        Category: '/:slug',
        Series: '/series/:slug'
    }
}
