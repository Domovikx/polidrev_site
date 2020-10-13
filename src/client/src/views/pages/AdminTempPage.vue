<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class AdminTempPage extends Vue {
  public name: 'AdminTempPage';
  private data: () => {};
}
</script>

<template>
  <v-container>
    AdminTempPage
  </v-container>
</template>

<style lang="scss" scoped></style>
