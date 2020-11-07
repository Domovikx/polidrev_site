<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import FurnitureCategory from './FurnitureCategory/FurnitureCategory.vue';
import FurnitureType from './FurnitureType.vue';
import FurnitureProject from './FurnitureProject.vue';
import FurniturePhotos from './FurniturePhotos.vue';
import FurnitureMaterialGroups from './FurnitureMaterialGroups.vue';
import FurniturePrices from './FurniturePrices.vue';

@Component({
  components: {
    FurnitureCategory,
    FurnitureType,
    FurnitureProject,
    FurniturePhotos,
    FurnitureMaterialGroups,
    FurniturePrices,
  },
})
export default class OptionsFeatures extends Vue {
  public name: 'OptionsFeatures';
}
</script>

<template>
  <v-container>
    <FurnitureCategory></FurnitureCategory>
    <FurnitureType></FurnitureType>
    <FurnitureProject></FurnitureProject>
    <FurniturePhotos></FurniturePhotos>
    <FurnitureMaterialGroups></FurnitureMaterialGroups>
    <FurniturePrices></FurniturePrices>

    Описание краткое: текстовое поле <br />
    <br />

    Описание подробное: текстовое поле <br />
    <br />

    Курс доллара: input<br />
  </v-container>
</template>

<style lang="scss" scoped></style>
