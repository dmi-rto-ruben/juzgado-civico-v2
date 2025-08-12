<script setup lang="ts">
import AdminLayout from "@/Pages/Layout/AdminLayout.vue";
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";


let query = ref('');

defineProps({
    users: Array
});
</script>

<template>

    <div>
        <h1>Busqueda:</h1>

        <input type="search" v-model="query">

        <div v-if="users.length">
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{ user.name }}
                </li>
            </ul>
        </div>

    </div>

</template>

<style scoped>

</style>
