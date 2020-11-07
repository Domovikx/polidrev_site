<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FurnitureType extends Vue {
  public name: 'FurnitureType';
}
</script>

<template>
  <v-container>
    FurnitureType <br />
    Тип мебели: <br />
    Диван кровать <br />
    Кресло<br />
  </v-container>
</template>

<style lang="scss" scoped></style>
