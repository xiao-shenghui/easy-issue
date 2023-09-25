<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
defineProps<{ theme: boolean }>();
const emit = defineEmits(['changeTheme']);
const change = function (status: boolean) {
    emit('changeTheme', status);
}

</script>

<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">
            <!-- <EISSUE></EISSUE> -->
            <img src="../assets/E-ISSUE.svg">
        </div>
        <div class="layout-nav">
            <MenuItem name="1">
            <Switch :value="theme" @on-change="change" size="large" true-color="#19be6b" false-color="#2d8cf0">
                <template #open>
                    <span>白天</span>
                </template>
                <template #close>
                    <span>黑夜</span>
                </template>
            </Switch>
            </MenuItem>
            <MenuItem name="1">
            <Icon type="logo-github" size="30" />
            </MenuItem>
        </div>
    </Menu>
</template>

<style scoped></style>