<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class YandexMap extends Vue {
  public name: 'YandexMap';

  // Lifecycle hook
  private created() {
    // @ts-ignore
    ymaps.ready(() => {
      // @ts-ignore
      const myMap = new ymaps.Map('YMapsID', {
        center: [55.76, 37.64],
        zoom: 10,
      });
    });
  }
}
</script>

<template>
  <div id="YMapsID" style="min-width: 200px; min-height: 400px;"></div>
</template>

<style lang="scss" scoped></style>
