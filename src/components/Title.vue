<script>
    export default {
        props: {
            component: {
                type: String,
                default: 'h1',
            },
        },

        render(createElement) {
            return createElement(
                this.component,
                {
                    attrs: {
                        class:
                            'text-4xl tracking-tight leading-10 font-extrabold text-gray-900',
                    },
                },
                this.$scopedSlots.default()
            )
        },
    }
</script>
