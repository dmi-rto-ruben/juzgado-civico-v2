<script setup lang="ts">
import AdminLayout from "@/Layouts/Admin2Layout.vue";
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";


let query = ref('');

defineProps({
    users: Array
});
</script>

<template>
    <AdminLayout>
        <Head title="Búsqueda de usuarios" />

    <div>
        <h1>Busqueda:</h1>

        <input type="search" v-model="query">

        <div v-if="!users.length">
            No hay usuarios
        </div>
        <div v-if="users.length">
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{ user.id }}) {{ user.name }} {{ user.email }}
                </li>
            </ul>
        </div>

    </div>

    </AdminLayout>
</template>

<style scoped>

</style>
