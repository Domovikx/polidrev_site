<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

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
export default class NavigationDrawerComponent extends Vue {
  public name: 'NavigationDrawerComponent';

  private MUTATION__NAVIGATION_DRIVER: any;
  private GETTER__NAVIGATION_DRIVER: boolean;
  private GETTER__WINDOW_STORE__GET_BREAKPOINT: string;

  private data() {
    return {
      items: [
        {
          title: 'Home',
          url: '/',
          exact: true,
          icon: 'mdi-home',
        },
        { title: 'Мягкая мебель', url: '/SoftFurniture', icon: 'mdi-sofa' },
        {
          title: 'Корпусная мебель',
          url: '/CabinetFurniture',
          icon: 'mdi-wardrobe-outline',
        },
        {
          title: 'Где купить',
          url: '/WhereToBuy',
          icon: 'mdi-map',
        },
        { title: 'Оплата', url: '/Payment', icon: 'mdi-wallet-outline' },
      ],
    };
  }

  // computed:
  private get drawer() {
    const drawer: boolean = this[GETTER__NAVIGATION_DRIVER];
    const breakpoint: string = this[GETTER__WINDOW_STORE__GET_BREAKPOINT];
    switch (breakpoint) {
      case 'xs':
        return drawer;
      case 'sm':
        return drawer;
      case 'md':
        return false;
      case 'lg':
        return false;
      case 'xl':
        return false;
      default:
        return false;
    }
  }
  private set drawer(drawer: boolean) {
    this[MUTATION__NAVIGATION_DRIVER](drawer);
  }
}
</script>

<template>
  <v-navigation-drawer
    disable-resize-watcher
    v-model="drawer"
    app
    clipped
    right
    class="grey lighten-4"
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.url"
        :exact="item.exact"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
