<template>
    <Layout>
        <Title classes="mb-8">Snippets</Title>

        <div v-for="(snippets, name) in categories" :key="name" class="mb-8">
            <h2 class="text-2xl tracking-tight leading-10 font-extrabold text-gray-900">{{ name }}</h2>
            <ul>
                <li v-for="snippet in snippets" :key="snippet.slug">
                    <g-link :to="`/snippets/${snippet.slug}`" class="underline">{{ snippet.title }}</g-link>
                </li>
            </ul>
        </div>
    </Layout>
</template>

<page-query>
    query {
        allSnippet {
            edges {
                node {
                    title
                    slug
                    category
                }
            }
        }
    }
</page-query>

<script>
    import groupBy from 'lodash/groupBy'

    import Title from '@/components/Title'

    export default {
        components: {
            Title,
        },

        computed: {
            snippets() {
                return this.$page.allSnippet.edges.map(edge => edge.node)
            },

            categories() {
                return groupBy(this.snippets, 'category')
            },
        },
    }
</script>
