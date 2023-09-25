<script setup lang="ts">
import useIssue from '../store/issue'
import { defineProps, reactive, ref } from 'vue';
import { saveAs } from 'file-saver';

const props = defineProps<{
    mavonvalue: string
}>()

const { config } = useIssue();

const onCopy = function () {
    // 复制到剪贴板
    // console.log(props.mavonvalue);
    navigator.clipboard.writeText(props.mavonvalue)
        .then(() => {
            alert('Copying successfull');
        })
        .catch((error) => {
            alert('Copying failed: ' + error);
        });
}

const fileType = ref('.md')
const fileTypeList = reactive([
    {
        value: '.md',
        label: 'Md'
    },
    {
        value: '.yml',
        label: 'Yml'
    },
    {
        value: '.txt',
        label: 'Txt'
    }
])

const onSave = async function () {
    const file = new File([props.mavonvalue], `mavon-issue+${fileType.value}`, { type: "text/plain;charset=utf-8" });
    await saveAs(file);
    setTimeout(() => {
        alert('save & download successfull');
    }, 1000)
}

</script>

<template>
    <Tag type="dot" color="primary" @click="config.detail.isShow = !config.detail.isShow">Details Config</Tag>
    <Tag type="dot" color="success" @click="config.tem.isShow = !config.tem.isShow">Issue Template</Tag>
    <Tag type="dot" color="warning" @click="config.theme.isShow = !config.theme.isShow">Theme Config</Tag>
    <Tag type="dot" @click="onCopy">Copy</Tag>
    <Tag type="dot" @click="onSave">Save As</Tag>
    <Select v-model="fileType" clearable style="width:60px;">
        <Option v-for="item in fileTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>

<style scoped>
.ivu-select-dropdown {
    z-index: 2000 !important;
}
</style>