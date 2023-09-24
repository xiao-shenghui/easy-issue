import { defineStore } from "pinia";
import { ref } from 'vue'
const useCount = defineStore('count', () => {
    const num = ref(0);
    return {
        num
    }
});

export default useCount;