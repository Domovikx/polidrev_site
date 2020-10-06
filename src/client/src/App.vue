<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DefaultLayout from './views/layouts/DefaultLayout.vue';
import EmptyLayout from './views/layouts/EmptyLayout.vue';

import BarComponent from './views/parts/BarComponent.vue';

@Component({
  components: { DefaultLayout, EmptyLayout, BarComponent },
})
export default class App extends Vue {
  public name: 'App';

  private data: () => {};

  // computed
  private get layout(): any {
    return this.$route.meta.layout;
  }
}
</script>

<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>
