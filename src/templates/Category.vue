<template>
    <Layout>
        <Title class="mb-8">{{ category.title }}</Title>
        <Content :string="category.content" />
        <ul class="mt-8">
            <li v-for="serie in series" :key="serie.slug">
                <g-link :to="`/series/${serie.slug}`" class="underline">{{ serie.title }}</g-link>
            </li>
        </ul>
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
        },

        metaInfo() {
            return {
                title: this.$page.category.title,
            }
        },
    }
</script>
