<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class PaymentPage extends Vue {
  public name: 'PaymentPage';
  private data: () => {};
}
</script>

<template>
  <v-container>
    PaymentPage
  </v-container>
</template>

<style lang="scss" scoped></style>
