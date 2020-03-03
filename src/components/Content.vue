<template>
    <div class="content" v-html="string" />
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
    .content {
        @apply text-lg text-gray-700 leading-normal;
    }

    .content > * + *,
    .content li + li,
    .content li > p + p {
        @apply mt-6;
    }

    .content h1,
    .content h2,
    .content h3,
    .content h4,
    .content h5,
    .content h6 {
        @apply tracking-tight leading-10 font-extrabold text-gray-900;
    }

    .content h1 {
        @apply text-4xl;
    }

    .content h2 {
        @apply text-3xl mb-2 mt-10;
    }

    .content h3 {
        @apply text-2xl mt-8 -mb-2;
    }

    .content strong {
        @apply text-gray-900 font-bold;
    }

    .content a {
        @apply text-gray-900 underline;
    }

    .content code {
        @apply font-mono text-sm inline bg-gray-300 rounded p-1;
    }

    .content pre code {
        @apply block bg-gray-100 text-gray-300 leading-loose p-12 -mx-8;
    }

    .content blockquote {
        @apply border-l-4 border-gray-400 pl-4 italic;
    }

    .content ul,
    .content ol {
        @apply pl-5;
    }

    .content ul {
        @apply list-disc;
    }

    .content ol {
        @apply list-decimal;
    }
</style>
