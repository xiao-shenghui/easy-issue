<script setup lang="ts">
import useIssue from '../store/issue'
const { config, temList } = useIssue();

</script>
<template>
    <Drawer title="Issue Template" :closable="false" v-model="config.tem.isShow">
        <RadioGroup v-model="config.tem.val" type="button" button-style="solid" class="themeGroup">
            <Radio :class="{ 'themeOption': radio.isTitle }" :label="radio.val" :disabled="radio.isTitle"
                v-for="(radio, index) in temList" :key="index"></Radio>
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