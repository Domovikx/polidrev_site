<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FurniturePrices extends Vue {
  public name: 'FurniturePrices';
}
</script>

<template>
  <v-container>
    FurniturePrices <br />
    Цены по группам:<br />
  </v-container>
</template>

<style lang="scss" scoped></style>
