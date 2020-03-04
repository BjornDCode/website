<template>
    <Layout>
        <Title classes="mb-8">Links</Title>

        <div
            v-for="link in links"
            :key="link.slug"
            class="border-b border-gray-300 pb-12 mb-12 last:border-b-0 last:pb-0 last:mb-0"
        >
            <h2
                class="text-2xl tracking-tight leading-none font-extrabold text-gray-900 mb-4"
            >{{ link.title }}</h2>
            <Content :string="link.content" />
            <a
                class="inline-block rounded bg-gray-900 text-gray-200 text-xs font-medium uppercase tracking-wide px-6 py-3 mt-6 transition-transform duration-150 ease-out transform hover:scale-105"
                target="_blank"
                :href="link.url"
            >Check it out &#8250;</a>
        </div>
    </Layout>
</template>

<page-query>
    query {
        allLink {
            edges {
                node {
                    title
                    content
                    url
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

        metaInfo: {
            title: 'Links',
        },

        computed: {
            links() {
                return this.$page.allLink.edges.map(edge => edge.node)
            },
        },
    }
</script>
