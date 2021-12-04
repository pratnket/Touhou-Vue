<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ComponentPage />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentPage from "@/components/component-page.vue"; // @ is an alias to /src
import { VmButton, VmContainer } from "vue3-material";

@Options({
  components: {
    VmButton,
    VmContainer,
    ComponentPage,
  },
})
export default class About extends Vue {
  created() {
    console.log(this.$config);
  }
}
</script>