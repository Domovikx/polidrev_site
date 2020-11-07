<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import OptionsFeatures from '../AdminPages/OptionsFeatures.vue';

@Component({
  components: {
    OptionsFeatures,
  },
})
export default class AdminPage extends Vue {
  public name: 'AdminPage';
}
</script>

<template>
  <v-container>
    <v-tabs fixed-tabs show-arrows background-color="transparent">
      <v-tab>
        Мягкая мебель
      </v-tab>
      <v-tab>
        Корпусная мебель
      </v-tab>
      <v-tab>
        Характеристики мебели
      </v-tab>

      <v-tab-item :key="1">Мягкая мебель</v-tab-item>
      <v-tab-item :key="2">Корпусная мебель</v-tab-item>
      <v-tab-item :key="3">
        <OptionsFeatures></OptionsFeatures>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<style lang="scss" scoped></style>
