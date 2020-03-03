<template>
    <div class="flex">
        <aside
            class="w-3/5 h-screen sticky top-0 border-r border-gray-200 p-8 md:block md:w-48 lg:w-64"
            :class="{ 'hidden': !open }"
        >
            <g-link
                to="/"
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900"
            >Bjørn</g-link>

            <nav class="mt-8">
                <div class="mb-2">
                    <g-link
                        to="/snippets"
                        class="text-sm text-gray-600 font-medium hover:underline"
                    >Snippets</g-link>
                </div>
                <div>
                    <g-link
                        to="/meta"
                        class="text-sm text-gray-600 font-medium hover:underline mb-2"
                    >Meta</g-link>
                </div>
            </nav>
        </aside>
        <div>
            <button type="button" @click="toggle" class="md:hidden">
                <span
                    class="block w-8 bg-gray-600 rounded"
                    style="height: 0.1875rem; margin-bottom: 0.375rem;"
                ></span>
                <span
                    class="block w-8 bg-gray-600 rounded"
                    style="height: 0.1875rem; margin-bottom: 0.375rem;"
                ></span>
                <span class="block w-6 bg-gray-600 rounded" style="height: 0.1875rem;"></span>
            </button>

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
