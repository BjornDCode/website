<template>
    <Layout>
        <Title classes="mb-8">Articles</Title>

        <ul>
            <li v-for="article in articles" :key="article.slug">
                <g-link :to="`/articles/${article.slug}`" class="underline"
                    >{{ article.title }}
                    <span class="text-sm text-gray-600"
                        >({{ article.published_at | date }})</span
                    ></g-link
                >
            </li>
        </ul>
    </Layout>
</template>

<page-query>
    query {
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
    import Content from '@/components/Content'

    export default {
        components: {
            Title,
            Content,
        },

        metaInfo: {
            title: 'Links',
        },

        computed: {
            articles() {
                return this.$page.allArticle.edges
                    .map(edge => edge.node)
                    .sort((a, b) => {
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
