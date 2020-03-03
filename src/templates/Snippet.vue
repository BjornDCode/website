<template>
    <Layout>{{ snippet.title }}</Layout>
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
    export default {
        computed: {
            snippet() {
                return this.$page.snippet
            },
        },
    }
</script>
