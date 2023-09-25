<script setup lang="ts">
import { saveAs } from 'file-saver'
import HelloWorld from '../components/HelloWorld.vue'
import { ref } from 'vue'
const count = ref('我是Home页')
// 保存文件的方法
const handleSave = function () {
    var file = new File(["Hello, world!"], "hello world.txt", { type: "text/plain;charset=utf-8" });
    saveAs(file)
}
</script>

<template>
    <HelloWorld msg="Vite" />

    <div class="card">
        {{ count }}
    </div>
    <button @click="handleSave">save</button>
    <mavon-editor></mavon-editor>
    <hr>
    <h1>测试一下iView按钮组件</h1>
    <Space direction="vertical">
        <Space wrap>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
        </Space>
        <Space wrap>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </Space>
    </Space>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
