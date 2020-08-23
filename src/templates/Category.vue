<template>
    <Layout>
        <Title class="mb-8">{{ category.title }}</Title>
        <Content :string="category.content" />

        <div class="mt-8" v-if="articles.length">
            <h2
                class="text-xl tracking-tight leading-10 font-extrabold text-gray-900"
            >
                Articles
            </h2>
            <ul>
                <li v-for="article in articles" :key="article.slug">
                    <g-link
                        :to="`/articles/${article.slug}`"
                        class="underline"
                        >{{ article.title }}</g-link
                    >
                </li>
            </ul>
        </div>
    </Layout>
</template>

<page-query>
    query ($path:String!) {
        category(path: $path){
            title
            content
            belongsTo {
                edges {
                    node {
                        __typename
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
            category() {
                return this.$page.category
            },

            series() {
                return this.category.belongsTo.edges
                    .map(edge => edge.node)
                    .filter(node => node.__typename === 'Series')
            },

            articles() {
                return this.category.belongsTo.edges
                    .map(edge => edge.node)
                    .filter(node => node.__typename === 'Article')
            },
        },

        metaInfo() {
            return {
                title: this.$page.category.title,
            }
        },
    }
</script>
