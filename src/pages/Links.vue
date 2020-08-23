<template>
    <Layout>
        <Title classes="mb-8">Links</Title>

        <ul>
            <li v-for="link in links" :key="link.slug">
                <g-link :to="`/links/${link.slug}`" class="underline">{{
                    link.title
                }}</g-link>
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
            links() {
                return this.$page.allLink.edges
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
