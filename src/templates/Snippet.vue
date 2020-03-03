<template>
    <Layout>
        <Title>{{ snippet.title }}</Title>
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

    export default {
        components: {
            Title,
        },

        computed: {
            snippet() {
                return this.$page.snippet
            },
        },
    }
</script>
