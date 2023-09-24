<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { ref } from 'vue'
import useCount from '../store/count';
const count = ref('我是Home页')
const countStore = useCount();
console.log(countStore.num); //0
</script>

<template>
    <HelloWorld msg="Vite" />

    <div class="card">
        {{ count }}
    </div>
    <span>{{ countStore.num }}</span>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
