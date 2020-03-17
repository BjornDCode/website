<template>
    <Layout>
        <Title>Welcome</Title>
        <ul class="mt-8">
            <li>
                <g-link to="/concepts" class="underline">Concepts</g-link>
            </li>
            <li>
                <g-link to="/links" class="underline">Links</g-link>
            </li>
            <li>
                <g-link to="/thoughts" class="underline">Thoughts</g-link>
            </li>
            <li>
                <g-link to="/snippets" class="underline">Snippets</g-link>
            </li>
            <li>
                <g-link to="/meta" class="underline">Meta</g-link>
            </li>
        </ul>
    </Layout>
</template>

<script>
    import Title from '@/components/Title'

    export default {
        components: {
            Title,
        },
    }
</script>
