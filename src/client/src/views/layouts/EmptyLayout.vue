<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import BarComponent from '../parts/BarComponent.vue';
import FooterComponent from '../parts/FooterComponent.vue';

@Component({
  components: {},
})
export default class EmptyLayout extends Vue {
  public name: 'EmptyLayout';
  private data() {
    return {};
  }
}
</script>

<template>
  <v-layout>
    <v-main class="wrapper grey lighten-4">
      EmptyLayout
      <router-view />
    </v-main>
  </v-layout>
</template>

<style lang="scss" scoped></style>
