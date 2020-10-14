<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FooterComponent extends Vue {
  public name: 'FooterComponent';
}
</script>

<template>
  <v-footer app class="grey lighten-5">
    +375(33) 675-54-75, +375(29) 652-71-51
  </v-footer>
</template>

<style lang="scss" scoped>
.v-sheet.v-footer {
  align-items: center;
  justify-content: center;
}
</style>
