<template>
    <div class="prose lg:prose-xl" v-html="string" />
</template>

<script>
    import highlight from 'highlight.js/lib/highlight'
    import javascript from 'highlight.js/lib/languages/javascript'
    import xml from 'highlight.js/lib/languages/xml'
    import css from 'highlight.js/lib/languages/css'
    import php from 'highlight.js/lib/languages/php'
    import 'highlight.js/styles/github.css'

    highlight.registerLanguage('javascript', javascript)
    highlight.registerLanguage('xml', xml)
    highlight.registerLanguage('css', css)
    highlight.registerLanguage('php', php)

    export default {
        props: {
            string: {
                type: String,
                required: true,
            },
        },

        watch: {
            string: {
                immediate: true,
                handler() {
                    this.$nextTick(() => {
                        highlight.initHighlighting.called = false
                        highlight.initHighlighting()
                    })
                },
            },
        },
    }
</script>

<style>
    .prose pre {
        color: theme('colors.gray.800');
        background-color: theme('colors.gray.100');
    }
</style>
