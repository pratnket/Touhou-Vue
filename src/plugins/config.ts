import {App} from 'vue'

export interface ConfigOptions {
  base: any
  dev: any
  prod: any
}

export default {
  install: (app: App, options: ConfigOptions) => {
    app.config.globalProperties.$config =
      process.env.NODE_ENV === 'production'
        ? Object.freeze(Object.assign({}, options.base, options.prod))
        : Object.freeze(Object.assign({}, options.base, options.dev))
  },
}
