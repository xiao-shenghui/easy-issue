# 项目日志
## 事件
|日期|概略|细节|
|---|---|---|
|2023.09.24|初始化模板|TS+Vue3+Vite，下载依赖包|

## 过程
## 2023.09.24
1. `npm create vite@latest`创建项目
2. `选vue和ts`, 安装初始依赖
3. 优化TS报错问题`tsconfig.json`和`vite-env.d.ts`
```json
// 1.1 tsconfig.json
/* Bundler mode 修改*/
"moduleResolution": "node",
//原先是"moduleResolution": "bundler", 
// 使用vue3+ts需要更改为 "node"
// 不然会有以下报错：
// vue模块找不到，以及使用组合式API的时候报非类型化函数调用不能接受类型参数等错误

// 1.2 tsconfig.node.json
"moduleResolution": "node",　
// 也改为node

// 2. "allowImportingTsExtensions": true,
// 删除tsconfig文件中的"allowImportingTsExtensions": true,
```
```ts
// vite-env.d.ts
// 添加如下声明文件
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}
```
4. 安装所需要的依赖包
> iview组件库, mavon-editor@3.0.1 markdown文档编辑库, FileSaver.js文件保存库。  
```sh
cnpm i view-ui-plus@1.3.0 mavon-editor@3.0.1 file-saver vue-router pinia --save
```
5. 去除掉其他不相干的文件。
6. 配置一下路由文件，仓库，引入和使用mavon-editor和view-ui-plus

### 配置路由文件
- 定义router对象
```ts
// router - index.ts
// 引入createRouter, 
// 引入createWebHistory
// 引入RouteRecordRaw (路由数组的泛型类型 routes: Array<RouteRecordRaw>)
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HelloWorld from '@/component/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'hello',
        component: HelloWorld
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
```
- 导入
```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router from '@/router/index.ts'
import router from './router/index'
// 这里会报一个错：导入路径不能以“.ts”扩展名结束。
// 导入时，把.ts去掉， 改为相对路径
const app = createApp(App)
app.use(router).mount('#app')
```
- 修改一下vite.config.ts，使其能导入ts文件，并配置根路径
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 此时会报找不到模块path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  //添加配置如下：
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }, //设置别名
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
```
- 安装一下`types/node`包,
> 就可以愉快的使用node内置的`path`和`__dirname`了。
```sh
npm install @types/node --save-dev
```

### 配置store
- 定义store对象
```ts
// store -> count.ts
// 使用pinia的defineStore定义仓库
// 都带类型推断，基本不用定义或者引入类型
import { defineStore } from "pinia";
import { ref } from 'vue'
const useCount = defineStore('count', () => {
    const num = ref(0);
    return {
        num
    }
});

export default useCount;
```
- 引入pinia中的`{createPinia}`, 创建全局store.
```ts
// main.ts
import { createPinia } from 'pinia'
const pinia = createPinia();
app.use(router).use(pinia).mount('#app')
```
- 测试使用
> 在`Home.vue`中测试使用
```ts
import useCount from '../store/count';
const countStore = useCount();
console.log(countStore.num); //0
```
```html
<span>{{ countStore.num }}</span>
```

### 后续安排
> 配置FileSaver, mavon-editor和view-ui-plus
