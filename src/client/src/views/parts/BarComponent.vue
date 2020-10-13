<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { mapGetters, mapActions, mapMutations } from 'vuex';

import {
  GETTER__NAVIGATION_DRIVER,
  MUTATION__NAVIGATION_DRIVER,
} from '../../store/modules/navigationDrawer';

@Component({
  components: {},
  computed: mapGetters([GETTER__NAVIGATION_DRIVER]),
  methods: mapMutations([MUTATION__NAVIGATION_DRIVER]),
})
export default class BarComponent extends Vue {
  public name: 'BarComponent';
  private data: () => {};

  private GETTER__NAVIGATION_DRIVER: boolean | null;
  private MUTATION__NAVIGATION_DRIVER: any;

  private goto(path: string): void {
    if (this.$route.path !== path) {
      this.$router.push(path);
    }
  }

  private onClickBurger() {
    this.MUTATION__NAVIGATION_DRIVER(!this.GETTER__NAVIGATION_DRIVER);
  }
}
</script>

<template>
  <v-app-bar app clipped-right class="grey lighten-5">
    <v-bottom-navigation style="height: 100%">
      <!-- <v-app-bar-nav-icon @click="onClickBurger"></v-app-bar-nav-icon> -->
      <v-img
        class="v-img ml-4"
        @click="goto('/')"
        contain
        src="../../assets/logo-polidrev.webp"
      ></v-img>

      <v-spacer></v-spacer>

      <v-btn text to="/SoftFurniture">
        <span>Мягкая мебель</span>
      </v-btn>

      <v-btn text to="/CabinetFurniture">
        Корпусная мебель
      </v-btn>

      <v-btn text to="/WhereToBuy">
        Где купить
      </v-btn>

      <v-btn text to="/Payment">
        Оплата
      </v-btn>

      <v-app-bar-nav-icon @click="onClickBurger"></v-app-bar-nav-icon>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-item-group.v-bottom-navigation {
  background: none;
  box-shadow: none;
}

.v-img {
  cursor: pointer;
  max-height: 100%;
  max-width: 200px;
  min-width: 130px;
}

.v-app-bar__nav-icon.v-btn.v-btn--flat.v-btn--icon {
  height: 100%;
}
</style>
