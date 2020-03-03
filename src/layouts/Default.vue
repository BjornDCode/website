<template>
    <div class="flex">
        <aside
            class="w-3/5 h-screen sticky top-0 border-r border-gray-200 p-8"
            :class="{ 'hidden': !open }"
        >
            <g-link
                to="/"
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900"
            >Bjørn</g-link>

            <nav class="mt-8">
                <g-link to="/snippets" class="block text-sm text-gray-700 mb-2">Snippets</g-link>
                <g-link to="/meta" class="block text-sm text-gray-700 mb-2">Meta</g-link>
            </nav>
        </aside>
        <div>
            <button type="button" @click="toggle">Toggle</button>

            <main>// Content</main>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
            }
        },

        methods: {
            toggle() {
                this.open = !this.open
            },
        },
    }
</script>
