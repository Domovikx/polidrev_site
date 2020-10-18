<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { mapGetters, mapActions, mapMutations } from 'vuex';

import {
  GETTER__NAVIGATION_DRIVER,
  MUTATION__NAVIGATION_DRIVER,
} from '../../store/modules/navigationDrawer';
import { GETTER__WINDOW_STORE__GET_BREAKPOINT } from '../../store/modules/windowStore';

@Component({
  components: {},
  methods: mapMutations([MUTATION__NAVIGATION_DRIVER]),
  computed: mapGetters([
    GETTER__NAVIGATION_DRIVER,
    GETTER__WINDOW_STORE__GET_BREAKPOINT,
  ]),
})
export default class BarComponent extends Vue {
  public name: 'BarComponent';

  private GETTER__NAVIGATION_DRIVER: boolean | null;
  private MUTATION__NAVIGATION_DRIVER: any;
  private GETTER__WINDOW_STORE__GET_BREAKPOINT: string;

  private showNavigation: boolean = false;
  private clientWidth: number = document.documentElement.clientWidth;

  private data() {
    return {};
  }

  private goto(path: string): void {
    if (this.$route.path !== path) {
      this.$router.push(path);
    }
  }

  private onClickBurger(): void {
    this[MUTATION__NAVIGATION_DRIVER](!this[GETTER__NAVIGATION_DRIVER]);
  }

  // computed
  private get isShowNavigation(): boolean {
    const breakpoint: string = this[GETTER__WINDOW_STORE__GET_BREAKPOINT];
    switch (breakpoint) {
      case 'xs':
        return false;
      case 'sm':
        return false;
      case 'md':
        return true;
      case 'lg':
        return true;
      case 'xl':
        return true;
      default:
        return false;
    }
  }
}
</script>

<template>
  <v-app-bar app clipped-right dark class="v-app-bar" color="teal darken-4">
    <v-img
      class="v-img ml-4"
      @click="goto('/')"
      contain
      src="../../assets/logo-polidrev.webp"
    ></v-img>

    <v-bottom-navigation
      class="v-bottom-navigation"
      style="height: 100%"
      v-if="isShowNavigation"
    >
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
    </v-bottom-navigation>

    <v-bottom-navigation
      class="v-bottom-navigation"
      style="height: 100%"
      v-else
    >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="onClickBurger"></v-app-bar-nav-icon>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-app-bar {
  display: grid;
  grid-template-columns: minmax(0, 1264px);
  justify-content: center;
}

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
