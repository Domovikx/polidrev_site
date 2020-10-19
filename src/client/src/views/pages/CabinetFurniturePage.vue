<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CabinetFurniturePage extends Vue {
  public name: 'CabinetFurniturePage';
}
</script>

<template>
  <v-container>
    CabinetFurniturePage

    <v-img
      class="v-img"
      src="../../assets/img-001/custom-cutting-1.webp"
      max-height="440"
    ></v-img>
  </v-container>
</template>

<style lang="scss" scoped>
.v-img {
  border-radius: 4px;
}
</style>
