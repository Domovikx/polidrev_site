<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FooterComponent extends Vue {
  public name: 'FooterComponent';
}
</script>

<template>
  <v-footer app absolute dark class="v-footer" color="teal darken-4">
    <v-btn text href="tel:+375(33)-675-54-75">
      <v-icon>mdi-cellphone-android</v-icon> +375(33)675-54-75
    </v-btn>
    <v-btn text href="tel:+375(29)-652-71-51">
      <v-icon>mdi-cellphone-android</v-icon> +375(29)652-71-51
    </v-btn>
  </v-footer>
</template>

<style lang="scss" scoped>
.v-sheet.v-footer {
  align-items: center;
  justify-content: center;
}
</style>
