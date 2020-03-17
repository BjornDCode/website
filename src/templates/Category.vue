<template>
    <Layout>
        <Title class="mb-8">{{ category.title }}</Title>
        <Content :string="category.content" />

        <div class="mt-8" v-if="series.length">
            <h2 class="text-xl tracking-tight leading-10 font-extrabold text-gray-900">Series</h2>
            <ul>
                <li v-for="serie in series" :key="serie.slug">
                    <g-link :to="`/series/${serie.slug}`" class="underline">{{ serie.title }}</g-link>
                </li>
            </ul>
        </div>

        <div class="mt-8" v-if="articles.length">
            <h2
                class="text-xl tracking-tight leading-10 font-extrabold text-gray-900"
            >Single Articles</h2>
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
                        ... on Series {
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
                return this.category.belongsTo.edges.map(edge => edge.node)
            },

            articles() {
                return []
            },
        },

        metaInfo() {
            return {
                title: this.$page.category.title,
            }
        },
    }
</script>
