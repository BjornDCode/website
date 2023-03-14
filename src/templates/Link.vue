<template>
    <Layout>
        <Title class="mb-4">{{ link.title }}</Title>
        <span class="block mb-6 text-sm text-gray-700">{{
            link.published_at | date
        }}</span>
        <Content :string="link.content" />
        <div class="mt-4 text-gray-800 font-medium">
            <a class="underline" target="_blank" :href="link.url"
                >Check it out &#8250;</a
            >
        </div>
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
import Title from "@/components/Title";
import Content from "@/components/Content";

export default {
    components: {
        Title,
        Content,
    },

    computed: {
        link() {
            return this.$page.link;
        },
    },

    metaInfo() {
        return {
            title: this.$page.link.title,
        };
    },
};
</script>
