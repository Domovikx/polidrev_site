<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FurniturePhotos extends Vue {
  public name: 'FurniturePhotos';
}
</script>

<template>
  <v-container>
    FurniturePhotos<br />
    Фотографии: <br />
    Массив инпутов и вывод картинки <br />
  </v-container>
</template>

<style lang="scss" scoped></style>
