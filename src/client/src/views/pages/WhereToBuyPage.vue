<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class WhereToBuyPage extends Vue {
  public name: 'WhereToBuyPage';
  private data() {
    return {};
  }
}
</script>

<template>
  <v-container>
    WhereToBuyPage
  </v-container>
</template>

<style lang="scss" scoped>
.v-img {
  border-radius: 4px;
}
</style>
