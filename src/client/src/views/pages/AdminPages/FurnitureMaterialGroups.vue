<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FurnitureMaterialGroups extends Vue {
  public name: 'FurnitureMaterialGroups';
}
</script>

<template>
  <v-container>
    material groups<br />
    Группы материалов: <br />
    гр-1 + ткань <br />
  </v-container>
</template>

<style lang="scss" scoped></style>
