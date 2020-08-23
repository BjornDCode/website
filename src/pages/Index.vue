<template>
    <Layout>
        <Title>Welcome</Title>
        <ul class="mt-8">
            <li v-for="post in posts" :key="post.slug">
                <g-link :to="post.url" class="underline"
                    >{{ post.title }}
                    <span class="text-sm text-gray-600"
                        >({{ post.published_at | date }})</span
                    ></g-link
                >
            </li>
        </ul>
    </Layout>
</template>

<page-query>
    query {
        allLink {
            edges {
                node {
                    title
                    slug
                    content
                    url
                    published_at
                }
            }
        }
        allSnippet {
            edges {
                node {
                    title
                    slug
                    category
                    published_at
                }
            }
        }
        allArticle {
            edges {
                node {
                    title
                    slug
                    content
                    published_at
                }
            }
        }
    }
</page-query>

<script>
    import Title from '@/components/Title'

    export default {
        components: {
            Title,
        },

        computed: {
            links() {
                return this.$page.allLink.edges.map(edge => edge.node)
            },

            snippets() {
                return this.$page.allSnippet.edges.map(edge => edge.node)
            },

            articles() {
                return this.$page.allArticle.edges.map(edge => edge.node)
            },

            posts() {
                return [
                    ...this.links.map(link => ({
                        type: 'link',
                        title: link.title,
                        url: `/links/${link.slug}`,
                        published_at: link.published_at,
                    })),
                    ...this.snippets.map(snippet => ({
                        type: 'snippet',
                        title: snippet.title,
                        url: `/snippets/${snippet.slug}`,
                        published_at: snippet.published_at,
                    })),
                    ...this.articles.map(article => ({
                        type: 'article',
                        title: article.title,
                        url: `/articles/${article.slug}`,
                        published_at: article.published_at,
                    })),
                ].sort((a, b) => {
                    if (a.published_at < b.published_at) {
                        return 1
                    }

                    if (a.published_at > b.published_at) {
                        return -1
                    }

                    return 0
                })
            },
        },
    }
</script>
