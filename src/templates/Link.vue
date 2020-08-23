<template>
    <Layout>
        <Title class="mb-4">{{ link.title }}</Title>
        <span class="block mb-6 text-sm text-gray-700">{{
            link.published_at | date
        }}</span>
        <Content :string="link.content" />
        <a
            class="inline-block rounded bg-gray-900 text-gray-200 text-xs font-medium uppercase tracking-wide px-6 py-3 mt-6 transition-transform duration-150 ease-out transform hover:scale-105"
            target="_blank"
            :href="link.url"
            >Check it out &#8250;</a
        >
    </Layout>
</template>

<page-query>
    query ($path:String!) {
        link(path: $path){
            title
            content
            url
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
            link() {
                return this.$page.link
            },
        },

        metaInfo() {
            return {
                title: this.$page.link.title,
            }
        },
    }
</script>
