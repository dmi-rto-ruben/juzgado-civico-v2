<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen bg-gray-50 text-gray-900">
        <header class="border-b bg-white">
            <div class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <h1 class="text-lg font-semibold">Panel</h1>
                <nav class="flex gap-4">
                    <Link href="/">Inicio</Link>
                    <Link href="/admin/users">Usuarios</Link>
                </nav>
            </div>
        </header>

        <main class="mx-auto max-w-6xl px-4 py-6">
            <slot />
        </main>

        <footer class="border-t bg-white">
            <div class="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
                © {{ new Date().getFullYear() }} — Tu app
            </div>
        </footer>
    </div>
</template>

<style scoped>

</style>
