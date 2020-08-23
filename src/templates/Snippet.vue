<template>
    <Layout>
        <Title class="mb-4">{{ snippet.title }}</Title>
        <span class="block mb-6 text-sm text-gray-700">{{
            snippet.published_at | date
        }}</span>
        <Content :string="snippet.content" />
    </Layout>
</template>

<page-query>
    query ($path:String!) {
        snippet(path: $path){
            title
            content
            published_at
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
            snippet() {
                return this.$page.snippet
            },
        },

        metaInfo() {
            return {
                title: this.$page.snippet.title,
            }
        },
    }
</script>
