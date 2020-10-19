<script lang="ts">
/** Yandex Map - Warehouse Shop
 * https://getbootstrap.com/docs/3.4/components/#glyphicons
 * https://yandex.ru/dev/maps/jsapi/doc/2.1/dg/concepts/geoobjects.html
 * https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/Placemark.html/
 */
// @ts-nocheck

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MapWarehouseShop extends Vue {
  public name: 'MapWarehouseShop';

  // Lifecycle hook
  private created() {
    ymaps.ready(this.initMap);
  }

  private initMap() {
    const mark1 = new ymaps.Placemark(
      [55.13074, 30.255402],
      {
        hintContent: `Склад-магазин "Полидрев"<br> аг. Октябрьская, ул.Октябрьская, 7`,
      },
      {
        preset: 'islands#greenGlyphIcon',
        iconColor: '#01b63e',
        iconGlyphColor: '#004d40',
        iconGlyph: 'home',
      },
    );

    new ymaps.Map('MapWarehouseShopID', {
      center: [55.13074, 30.255402],
      zoom: 11,
    }).geoObjects.add(mark1);
  }
}
</script>

<template>
  <div
    id="MapWarehouseShopID"
    class="blog-shadow-dreamy root"
    style="min-width: 200px; min-height: 400px;"
  ></div>
</template>

<style lang="scss" scoped>
.root {
  margin: 0 0 16px;
}
.blog-shadow-dreamy {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
</style>
