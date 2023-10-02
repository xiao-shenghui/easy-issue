
<script setup lang="ts">
// Home.vue管理常规数据.
// store管理公共数据.(配置数据)
// localstorage管理持久化数据.(例如: 配置好以后的配置数据)
// 常规数据: 头部: 主题 , mavon的文本内容
import EHeader from '../components/EHeader.vue';
import ETag from '../components/ETag.vue';
import EDrawerAll from '../components/EDrawerAll.vue';
import EDrawerTem from '../components/EDrawerTem.vue';
import EDrawerTheme from '../components/EDrawerTheme.vue';
import { reactive, ref, watch } from 'vue'
import useIssue from '../store/issue';
// 模板列表
import bugsOnly from '../assets/issueTem/bugs-only'
import pullIssue from '../assets/issueTem/pull-issue'
import affect from '../assets/issueTem/affect'
import prIntroduce from '../assets/issueTem/pr-introduce'
import formal from '../assets/issueTem/formal'
import simple from '../assets/issueTem/simple'
import classic from '../assets/issueTem/classic'
import detailed from '../assets/issueTem/detailed'
import behavior from '../assets/issueTem/behavior'
import screenshot from '../assets/issueTem/screenshot'

const { config } = useIssue();
const theme = ref(false);  //false: 黑夜  true: 白天
const changeTheme = function (tag: boolean) {
    theme.value = tag;  //根据主题,决定整体样式
}
const mavonvalue = ref('');
// 监听一个getter函数
watch(() => config.tem.val, (newValue) => {
    // 根据newValue, 匹配不同的模板
    console.log(newValue);
    switch (newValue) {
        case 'Bugs-Only':
            mavonvalue.value = bugsOnly;
            break;
        case 'Pull-Issue':
            mavonvalue.value = pullIssue;
            break;
        case 'Affect':
            mavonvalue.value = affect;
            break;
        case 'PR-Introduce':
            mavonvalue.value = prIntroduce;
            break;
        case 'Formal':
            mavonvalue.value = formal;
            break;
        case 'Simple':
            mavonvalue.value = simple;
            break;
        case 'Classic':
            mavonvalue.value = classic;
            break;
        case 'Detailed':
            mavonvalue.value = detailed;
            break;
        case 'Behavior':
            mavonvalue.value = behavior;
            break;
        case 'ScreenShot':
            mavonvalue.value = screenshot;
            break;
    }
})
const color = ref('rgba(25, 190,107, 1)')
const style = reactive({
    color: color.value
})
watch(color, (newValue) => {
    style.color = newValue;
})
const toolBg = ref('#fff');

</script>

<template>
    <Layout>
        <Header>
            <EHeader :theme="theme" @changeTheme="changeTheme" />
        </Header>
        <Content :style="{ padding: '0px 50px' }">
            <Card :style="{ margin: '10px 0' }">
                <!-- tag -->
                <ETag :mavonvalue="mavonvalue" />
                <!-- 抽屉1:All -->
                <EDrawerAll />
                <!-- 抽屉2 -->
                <EDrawerTem />
                <!-- 抽屉3 -->
                <EDrawerTheme />
            </Card>
            <mavon-editor :language="config.detail.language" :fontSize="config.detail.fontSize + 'px'" v-model="mavonvalue"
                :toolbarsBackground="toolBg" :style="style">
                <template #left-toolbar-before>
                    <ColorPicker v-model="color" alpha size="small" />
                </template>
            </mavon-editor>
        </Content>
        <Footer class="layout-footer-center">Designed by @xiao-shenghui</Footer>
    </Layout>
</template>

<style>
@import url('home.css');
</style>