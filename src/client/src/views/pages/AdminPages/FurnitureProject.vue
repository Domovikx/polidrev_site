<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FurnitureProject extends Vue {
  public name: 'FurnitureProject';
}
</script>

<template>
  <v-container>
    FurnitureProject <br />
    Проекты: <br />
    Виола <br />
    Лада <br />
  </v-container>
</template>

<style lang="scss" scoped></style>
