<template>
    <div class="content" v-html="string" />
</template>

<script>
    export default {
        props: {
            string: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style scoped>
    .content h1,
    .content h2,
    .content h3,
    .content h4,
    .content h5,
    .content h6 {
        color: pink;
    }
</style>
