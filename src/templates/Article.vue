<template>
    <Layout>
        <Title class="mb-8">{{ article.title }}</Title>
        <Content :string="article.content" />
    </Layout>
</template>

<page-query>
    query ($path:String!) {
        article(path: $path){
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
            article() {
                return this.$page.article
            },
        },

        metaInfo() {
            return {
                title: this.$page.article.title,
            }
        },
    }
</script>
