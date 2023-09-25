import { defineStore } from "pinia";
import { reactive } from 'vue'
const useIssue = defineStore('count', () => {
    // 所有配置
    const config = reactive({
        detail: {
            isShow: false,
            language: 'en', //语言
            fontSize: 18  //字体大小
        },
        tem: {
            isShow: false,
            val: '' //模板
        },
        theme: {
            isShow: false,
            toolVal: 'Light',  //工具栏主题
            contentVal: 'Light', //内容主题
            previewVal: 'Light' //预览主题
        }
    })

    // 全部模板
    const temList = reactive([
        {
            val: 'bugs',
            isTitle: true
        },
        {
            val: 'Bugs-Only',
            isTitle: false
        },
        {
            val: 'Pull-Issue',
            isTitle: false
        },
        {
            val: 'Q-A',
            isTitle: true
        },
        {
            val: 'Affect',
            isTitle: false
        },
        {
            val: 'PR-Introduce',
            isTitle: false
        },
        {
            val: 'Conversational',
            isTitle: true
        },
        {
            val: 'Formal',
            isTitle: false
        },
        {
            val: 'Simple',
            isTitle: false
        },
        {
            val: 'CheckList',
            isTitle: true
        },
        {
            val: 'Classic',
            isTitle: false
        },
        {
            val: 'Detailed',
            isTitle: false
        },
        {
            val: 'Code',
            isTitle: true
        },
        {
            val: 'Behavior',
            isTitle: false
        },
        {
            val: 'ScreenShot',
            isTitle: false
        },
    ])

    // 全部语言
    const langList = reactive(['zh-CN', 'en'])

    // 全部主题
    const themeList = reactive({
        toolThemeList: [
            {
                val: 'Tool Theme',
                isTitle: true
            },
            {
                val: 'Light',
                isTitle: false
            },
            {
                val: 'Dark',
                isTitle: false
            }
        ],
        contentThemeList: [
            {
                val: 'Content Theme',
                isTitle: true
            },
            {
                val: 'Light',
                isTitle: false
            },
            {
                val: 'Dark',
                isTitle: false
            }
        ],
        previewThemeList: [
            {
                val: 'Preview Theme',
                isTitle: true
            },
            {
                val: 'Light',
                isTitle: false
            },
            {
                val: 'Dark',
                isTitle: false
            }
        ]
    })
    return {
        config,
        temList,
        themeList,
        langList
    }
});

export default useIssue;