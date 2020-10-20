<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProgressCircular extends Vue {
  public name: 'ProgressCircular';
}
</script>

<template>
  <v-progress-circular
    class="progress-circular"
    :size="70"
    :width="7"
    color="green"
    indeterminate
  ></v-progress-circular>
</template>

<style lang="scss" scoped></style>
