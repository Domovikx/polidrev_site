<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import FurnitureSofaBed from './FurnitureSofaBed.vue';
import FurnitureSettle from './FurnitureSettle.vue';
import FurnitureArmchairBed from './FurnitureArmchairBed.vue';
import FurnitureBench from './FurnitureBench.vue';
import FurnitureCornerSofa from './FurnitureCornerSofa.vue';

@Component({
  components: {
    FurnitureSofaBed,
    FurnitureSettle,
    FurnitureArmchairBed,
    FurnitureBench,
    FurnitureCornerSofa,
  },
})
export default class SoftFurniturePage extends Vue {
  public name: 'SoftFurniturePage';
}
</script>

<template>
  <v-container>
    <v-img
      class="v-img"
      src="../../../assets/img-001/aboutgeothermal_geofinancialcase.webp"
      max-height="440"
    ></v-img>

    <v-tabs background-color="#004d40" center-active dark show-arrows>
      <v-tab>Диван-кровать</v-tab>
      <v-tab>Скамья</v-tab>
      <v-tab>Кресло-кровать</v-tab>
      <v-tab>Банкетка</v-tab>
      <v-tab>Угловой диван</v-tab>

      <v-tab-item :key="1" class="v-tab-item">
        <FurnitureSofaBed></FurnitureSofaBed>
      </v-tab-item>

      <v-tab-item :key="2" class="v-tab-item">
        <FurnitureSettle></FurnitureSettle>
      </v-tab-item>

      <v-tab-item :key="3" class="v-tab-item">
        <FurnitureArmchairBed></FurnitureArmchairBed>
      </v-tab-item>

      <v-tab-item :key="4" class="v-tab-item">
        <FurnitureBench></FurnitureBench>
      </v-tab-item>

      <v-tab-item :key="5" class="v-tab-item">
        <FurnitureCornerSofa></FurnitureCornerSofa>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<style lang="scss" scoped>
.v-img {
  border-radius: 4px 4px 0 0;
}
.v-tab-item {
  background-color: #f5f5f5;
}
</style>
