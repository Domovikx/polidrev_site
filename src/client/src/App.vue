<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { mapGetters, mapActions, mapMutations } from 'vuex';

import DefaultLayout from './views/layouts/DefaultLayout.vue';
import EmptyLayout from './views/layouts/EmptyLayout.vue';

import BarComponent from './views/parts/BarComponent.vue';

import {
  ACTION__WINDOW_STORE__CHECK_BREAKPOINT,
  ACTION__WINDOW_STORE__CHECK_IS_MOBILE,
} from './store/modules/windowStore';

@Component({
  components: { DefaultLayout, EmptyLayout, BarComponent },
  computed: mapGetters([]),
  methods: {
    ...mapActions([
      ACTION__WINDOW_STORE__CHECK_IS_MOBILE,
      ACTION__WINDOW_STORE__CHECK_BREAKPOINT,
    ]),
    ...mapMutations([]),
  },
})
export default class App extends Vue {
  public name: 'App';

  private ACTION__WINDOW_STORE__CHECK_IS_MOBILE: any;
  private ACTION__WINDOW_STORE__CHECK_BREAKPOINT: any;

  private data() {
    return {};
  }

  // computed
  private get layout(): string {
    return this.$route.meta.layout;
  }

  // Lifecycle hook
  private created() {
    this.init();
  }
  private destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  // Methods
  private init() {
    window.addEventListener('resize', this.resizeHandler);

    const userAgent: string = window.navigator.userAgent;
    this[ACTION__WINDOW_STORE__CHECK_IS_MOBILE](userAgent);

    const clientWidth: number = document.documentElement.clientWidth;
    this[ACTION__WINDOW_STORE__CHECK_BREAKPOINT](clientWidth);
  }

  private resizeHandler() {
    const clientWidth: number = document.documentElement.clientWidth;
    this[ACTION__WINDOW_STORE__CHECK_BREAKPOINT](clientWidth);
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

<style lang="scss" scoped></style>
