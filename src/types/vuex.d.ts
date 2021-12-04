// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 聲明自己的商店狀態
  interface State {
    count: number
  }

  // 為 `this.$store` 提供類型聲明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}