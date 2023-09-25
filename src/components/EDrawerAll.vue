<script setup lang="ts">
import useIssue from '../store/issue'
const { config, langList } = useIssue();

</script>

<template>
    <Drawer title="Details Config" width="512" :closable="false" v-model="config.detail.isShow">
        <div style="min-height: 20px;">
            Template Language:
            <RadioGroup v-model="config.detail.language" type="button" button-style="solid">
                <Radio :label="lan" v-for="(lan, index) in langList" :key="index"></Radio>
            </RadioGroup>
        </div>
        <div style="min-height: 20px; margin: 10px 0;">
            Font-Size:
            <InputNumber v-model="config.detail.fontSize" controls-outside />
            <Button disabled>PX</Button>
        </div>
        <div class="configBtn">
            <Button @click="config.tem.isShow = true" icon="ios-search">Issue Template</Button>
            <Button @click="config.theme.isShow = true" icon="ios-search">Theme Config</Button>
        </div>
    </Drawer>
</template>
<style scoped></style>