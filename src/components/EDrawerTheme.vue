<script setup lang="ts">
import useIssue from '../store/issue'
const { config, themeList } = useIssue();
</script>
<template>
    <Drawer title="Theme Config" :closable="false" v-model="config.theme.isShow">
        <RadioGroup v-model="config.theme.toolVal" type="button" button-style="solid" class="themeGroup">
            <Radio :class="{ 'themeOption': toolRadio.isTitle }" :label="toolRadio.val" :disabled="toolRadio.isTitle"
                v-for="(toolRadio, toolindex) in themeList.toolThemeList" :key="toolindex"></Radio>
        </RadioGroup>
        <RadioGroup v-model="config.theme.contentVal" type="button" button-style="solid" class="themeGroup">
            <Radio :class="{ 'themeOption': conRadio.isTitle }" :label="conRadio.val" :disabled="conRadio.isTitle"
                v-for="(conRadio, conindex) in themeList.contentThemeList" :key="conindex"></Radio>
        </RadioGroup>
        <RadioGroup v-model="config.theme.previewVal" type="button" button-style="solid" class="themeGroup">
            <Radio :class="{ 'themeOption': preRadio.isTitle }" :label="preRadio.val" :disabled="preRadio.isTitle"
                v-for="(preRadio, preindex) in themeList.previewThemeList" :key="preindex"></Radio>
        </RadioGroup>
    </Drawer>
</template>
<style scoped>
.themeGroup {
    display: flex;
    flex-direction: column;
}

.themeGroup label {
    margin: 3px 0;
    padding: 20px 5px;
    display: flex;
    align-items: center;
}

.themeOption {
    width: 60%;
    display: flex;
    justify-content: center;
    background-color: #969696 !important;
    color: #fff !important;
    font-weight: 900;
    padding: 0 !important;
}
</style>