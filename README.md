[![github star](https://img.shields.io/github/stars/x-extends/vxe-gantt-nuxt.svg)](https://github.com/x-extends/vxe-gantt-nuxt/stargazers)
[![npm version](https://img.shields.io/npm/v/vxe-gantt-nuxt.svg?style=flat-square)](https://www.npmjs.com/package/vxe-gantt-nuxt)
[![NodeJS with Webpack](https://github.com/x-extends/vxe-gantt-nuxt/actions/workflows/webpack.yml/badge.svg)](https://github.com/x-extends/vxe-gantt-nuxt/actions/workflows/webpack.yml)
[![npm downloads](https://img.shields.io/npm/dt/vxe-gantt-nuxt.svg?style=flat-square)](https://npm-stat.com/charts.html?package=vxe-gantt-nuxt)
[![issues](https://img.shields.io/github/issues/x-extends/vxe-gantt-nuxt.svg)](https://github.com/x-extends/vxe-gantt-nuxt/issues)
[![issues closed](https://img.shields.io/github/issues-closed/x-extends/vxe-gantt-nuxt.svg)](https://github.com/x-extends/vxe-gantt-nuxt/issues?q=is%3Aissue+is%3Aclosed)
[![pull requests](https://img.shields.io/github/issues-pr/x-extends/vxe-gantt-nuxt.svg)](https://github.com/x-extends/vxe-gantt-nuxt/pulls)
[![pull requests closed](https://img.shields.io/github/issues-pr-closed/x-extends/vxe-gantt-nuxt.svg)](https://github.com/x-extends/vxe-gantt-nuxt/pulls?q=is%3Apr+is%3Aclosed)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

# Vxe Gantt Nuxt

> [Vxe gantt](https://gantt.vxeui.com) module for [Nuxt](https://nuxt.com)

## Features

- Automatically import components and styles on demand.

## Installation

```bash
npm install vxe-gantt-nuxt -D
```

## Configuration

```ts
export default defineNuxtConfig({
  modules: [
    'vxe-pc-ui-nuxt',
    'vxe-table-nuxt',
    'vxe-gantt-nuxt'
  ],
  vxeGanttSetting: {
    // global: true // 是否全局加载，如果 false 则按需加载
  }
})
```

## Usage

```vue
<template>
  <div>
    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script>
export default {
  data() {
    const ganttOptions = {
      border: true,
      taskBarConfig: {
        showProgress: true
      },
      columns: [
        { field: 'title', title: '任务名称' },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10001, title: 'A项目', start: '2024-03-01', end: '2024-03-04', progress: 3 },
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10003, title: 'B大工程', start: '2024-03-03', end: '2024-03-11', progress: 90 },
        { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10005, title: '地球净化项目', start: '2024-03-08', end: '2024-03-15', progress: 100 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50 },
        { id: 10009, title: '地铁建设工程', start: '2024-03-19', end: '2024-03-20', progress: 5 },
        { id: 10010, title: '铁路修建计划', start: '2024-03-12', end: '2024-03-20', progress: 10 }
      ]
    }
    return {
      ganttOptions
    }
  }
}
</script>
```

Reference [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) and [playground](./playground/app.vue) use.

## Development

- Run `npm run update i` to install the dependencies.
- Run `npm run run` to start playground in development mode.
- Run `npm run build` to build this project.
