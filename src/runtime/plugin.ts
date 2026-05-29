import VxeUIGantt from 'vxe-gantt'
import { ModuleOptions } from '../types'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const moduleOptions = config.public.vxeGanttSetting as ModuleOptions

  // 应用全局配置
  if (moduleOptions.globalConfig) {
    VxeUIGantt.setConfig(moduleOptions.globalConfig)
  }

  nuxtApp.vueApp.use(VxeUIGantt)
})
