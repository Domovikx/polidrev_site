<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FooterComponent extends Vue {
  public name: 'FooterComponent';
  private data: () => {};
}
</script>

<template>
  <v-footer app class="grey lighten-5">
    Footer
  </v-footer>
</template>

<style lang="scss" scoped></style>
