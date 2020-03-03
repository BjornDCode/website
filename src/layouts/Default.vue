<template>
    <div class="flex">
        <aside
            class="w-3/5 h-screen sticky top-0 border-r border-gray-200 flex flex-col justify-between p-8 md:flex md:w-48 lg:w-64"
            :class="{ 'hidden': !open }"
        >
            <div>
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
            </div>

            <nav>
                <div>
                    <a
                        class="text-xs text-gray-700 hover:underline"
                        target="_blank"
                        href="https://twitter.com/bjornlindholmdk"
                    >Twitter</a>
                </div>
                <div>
                    <a
                        class="text-xs text-gray-700 hover:underline"
                        target="_blank"
                        href="https://www.instagram.com/bjornhansendk/"
                    >Instagram</a>
                </div>
                <div>
                    <a
                        class="text-xs text-gray-700 hover:underline"
                        target="_blank"
                        href="https://dev.to/bjornlindholmdk"
                    >Dev.to</a>
                </div>
            </nav>
        </aside>
        <div class="w-full">
            <div class="p-4 md:hidden">
                <button type="button" @click="toggle">
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
            </div>

            <main class="w-full">
                <div class="p-4 md:p-8 lg:max-w-xl lg:mx-auto">
                    <slot />
                </div>
            </main>
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
