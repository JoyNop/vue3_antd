<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-01 10:46:44
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-01 10:55:03
 * @Description: file content
 * @FilePath: /vue3-antd-admin/README.md
-->
# vue3-antd

基于 vue-cli+ vue3.0 + antd2.0 + ts4.0 的后台管理系统模板

- 账号：admin，密码：123456


> 使用了 Vue3.0 全家桶、ant-design-vue2.0 和 typescript4.0，实践 vue3.0 的新特性以及玩法，不得不说 vue3.0 的 Composition API 相比于 vue2.0 的 Options API
> 灵活很多，让我们可以灵活地组合组件逻辑，我们可以很轻松的使用 hooks 的形式去代替以前 mixins 等的写法。更多 hooks 可以参考[vueuse](https://vueuse.org/functions.html)

### 功能、组件的封装

- [x] 动态表格（扩展了伸缩列功能，以及使用 JSON schema 配置生成表格） // TODO 后续有待加强及完善
- [x] 动态表单（满足基本的需求） // TODO 后续有待加强及完善
- [ ] 自定义弹窗（支持 8 个方向拖拽改变大小以及拖拽移动位置）// TODO: 继承 antd 原组件所有 props
- [x] 图片视频预览（目前只是简单显示）
- [x] 分割组件（目前只做了左右）
- [x] 图标组件封装(本地 svg 封装、阿里图标的在线和离线封装)
- [ ] 其他...

### 页面功能

#### 系统看板

- [x] 首页

#### 系统管理

- [x] 账号管理
- [x] 角色管理
- [x] 资源管理
- [x] 字典管理

## Project setup

```
yarn install
# 或
yarn --frozen-lockfile
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```
