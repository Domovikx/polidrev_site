<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import BarComponent from '../parts/BarComponent.vue';
import FooterComponent from '../parts/FooterComponent.vue';
import NavigationDrawerComponent from '../parts/NavigationDrawerComponent.vue';

@Component({
  components: {
    BarComponent,
    FooterComponent,
    NavigationDrawerComponent,
  },
})
export default class DefaultLayout extends Vue {
  public name: 'DefaultLayout';
  private data() {
    return {};
  }
}
</script>

<template>
  <v-layout>
    <BarComponent />

    <NavigationDrawerComponent />

    <v-main class="v-main grey lighten-4">
      <v-card-text>
        DefaultLayout
        <router-view></router-view>
      </v-card-text>
    </v-main>

    <FooterComponent />
  </v-layout>
</template>

<style lang="scss" scope>
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0;
}
</style>
