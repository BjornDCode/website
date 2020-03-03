<template>
    <Layout>
        <Title>{{ snippet.title }}</Title>
        <Content :string="snippet.content" />
    </Layout>
</template>

<page-query>
    query ($path:String!) {
        snippet(path: $path){
            title
            content
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
