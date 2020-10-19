<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SoftFurniturePage extends Vue {
  public name: 'SoftFurniturePage';
}
</script>

<template>
  <v-container>
    SoftFurniturePage

    <v-img
      class="v-img"
      src="../../assets/img-001/aboutgeothermal_geofinancialcase.webp"
      max-height="440"
    ></v-img>
  </v-container>
</template>

<style lang="scss" scoped>
.v-img {
  border-radius: 4px;
}
</style>
