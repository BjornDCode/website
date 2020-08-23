<template>
    <Layout>
        <Title class="mb-4">{{ article.title }}</Title>
        <span class="block mb-6 text-sm text-gray-700">{{
            article.published_at | date
        }}</span>
        <Content :string="article.content" />
    </Layout>
</template>

<page-query>
    query ($path:String!) {
        article(path: $path){
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
