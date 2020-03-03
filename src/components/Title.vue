<script>
    export default {
        props: {
            component: {
                type: String,
                default: 'h1',
            },
            classes: {
                type: String,
                default: '',
            },
        },

        render(createElement) {
            return createElement(
                this.component,
                {
                    class: `text-4xl tracking-tight leading-10 font-extrabold text-gray-900 ${this.classes}`,
                },
                this.$scopedSlots.default()
            )
        },
    }
</script>
