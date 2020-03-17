<template>
    <Layout>
        <Title>{{ series.title }}</Title>
        <Content :string="series.content" />

        <ul class="mt-8">
            <li v-for="article in articles" :key="article.slug">
                <g-link :to="`/articles/${article.slug}`" class="underline">{{ article.title }}</g-link>
            </li>
        </ul>
    </Layout>
</template>

<page-query>
    query ($path:String!) {
        series(path: $path){
            title
            content
            belongsTo {
                edges {
                    node {
                        ... on Article {
                            title
                            slug
                        }
                    }
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

        computed: {
            series() {
                return this.$page.series
            },

            articles() {
                return this.series.belongsTo.edges.map(edge => edge.node)
            },
        },

        metaInfo() {
            return {
                title: this.$page.series.title,
            }
        },
    }
</script>
