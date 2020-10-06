<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BarComponent extends Vue {
  public name: 'BarComponent';
  private data: () => {};
}
</script>

<template>
  <v-app-bar app class="grey lighten-5">
    <v-bottom-navigation style="height: 100%">
      <v-btn fab to="/">
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/SoftFurniture">
        <span>Мягкая мебель</span>
      </v-btn>

      <v-btn text to="/CabinetFurniture">
        Корпусная мебель
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-item-group.v-bottom-navigation {
  background: none;
  box-shadow: none;
}
</style>
