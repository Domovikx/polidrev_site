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
export default class NavigationDrawerComponent extends Vue {
  public name: 'NavigationDrawerComponent';

  private GETTER__NAVIGATION_DRIVER: boolean;
  private MUTATION__NAVIGATION_DRIVER: any;

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
    return this.GETTER__NAVIGATION_DRIVER;
  }
  private set drawer(drawer: boolean) {
    this.MUTATION__NAVIGATION_DRIVER(drawer);
  }
}
</script>

<template>
  <v-navigation-drawer
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
