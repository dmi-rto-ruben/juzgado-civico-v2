<script setup lang="ts">

import { Link } from '@inertiajs/vue3';

</script>

<template>
    <main>
        <header>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </header>
        <article>
            <slot />
        </article>
    </main>
</template>

<style scoped>

</style>
