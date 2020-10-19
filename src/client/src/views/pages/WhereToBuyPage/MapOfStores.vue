<script lang="ts">
/** Yandex Map - Warehouse Shop
 * https://getbootstrap.com/docs/3.4/components/#glyphicons
 * https://yandex.ru/dev/maps/jsapi/doc/2.1/dg/concepts/geoobjects.html
 * https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/Placemark.html/
 */
// @ts-nocheck

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MapOfStores extends Vue {
  public name: 'MapOfStores';

  private markParams = {
    preset: 'islands#greenGlyphIcon',
    iconColor: '#01b63e',
    iconGlyphColor: '#004d40',
    iconGlyph: 'shopping-cart',
  };

  // Lifecycle hook
  private created() {
    ymaps.ready(this.initMap);
  }

  private initMap() {
    const markPolidrev = new ymaps.Placemark(
      [55.13074, 30.255402],
      {
        hintContent: `Склад-магазин "Полидрев"<br> аг. Октябрьская, ул.Октябрьская, 7`,
      },
      { ...this.markParams, iconGlyph: 'home' },
    );

    const markBelArtFurniture1 = new ymaps.Placemark(
      [55.173679, 30.212858],
      { hintContent: `ООО "БелАртМебель"<br> ул.Чкалова, 19/1` },
      this.markParams,
    );

    const markBelArtFurniture2 = new ymaps.Placemark(
      [55.179277, 30.224815],
      {
        hintContent: `ООО "БелАртМебель"<br> пр-т Московский, 64`,
      },
      this.markParams,
    );

    const markBelArtFurniture3 = new ymaps.Placemark(
      [55.169509, 30.127024],
      {
        hintContent: `ООО "БелАртМебель"<br> ул.39-й Армии, 22`,
      },
      this.markParams,
    );

    const markBelArtFurniture4 = new ymaps.Placemark(
      [55.198119, 30.206705],
      {
        hintContent: `ООО "БелАртМебель"<br> ул.Ленина, 48`,
      },
      this.markParams,
    );

    const markBelArtFurniture5 = new ymaps.Placemark(
      [55.197764, 30.189466],
      {
        hintContent: `ООО "БелАртМебель"<br> ул.Советской Армии, 4`,
      },
      this.markParams,
    );

    const markTradingHouseVityaz = new ymaps.Placemark(
      [55.197764, 30.189466],
      {
        hintContent: `Торговый Дом "Витязь"<br> проспект Строителей, 33`,
      },
      this.markParams,
    );

    const markTradingHousePolotsk = new ymaps.Placemark(
      [55.488188, 28.779776],
      {
        hintContent: `Торговый Дом (г.Полоцк)<br> г.Полоцк ул.Гоголя, 16`,
      },
      this.markParams,
    );

    const vitebskHoztorg1 = new ymaps.Placemark(
      [55.174049, 30.15136],
      {
        hintContent: `ОАО "Витебский Хозторг"<br> ул.1-я Пролетарская, 3`,
      },
      this.markParams,
    );
    const vitebskHoztorg2 = new ymaps.Placemark(
      [55.488188, 28.779776],
      {
        hintContent: `ОАО "Витебский Хозторг"<br> ул.Чкалова, 17/2`,
      },
      this.markParams,
    );
    const vitebskHoztorg3 = new ymaps.Placemark(
      [55.538779, 28.637483],
      {
        hintContent: `ОАО "Витебский Хозторг"<br> г.Новополоцк ул.Молодежная, 40`,
      },
      this.markParams,
    );

    new ymaps.Map('StoreMapID', {
      center: [55.184217, 30.202869],
      zoom: 11,
    }).geoObjects
      .add(markPolidrev)
      .add(markBelArtFurniture1)
      .add(markBelArtFurniture2)
      .add(markBelArtFurniture3)
      .add(markBelArtFurniture4)
      .add(markBelArtFurniture5)
      .add(markTradingHouseVityaz)
      .add(markTradingHousePolotsk)
      .add(vitebskHoztorg1)
      .add(vitebskHoztorg2)
      .add(vitebskHoztorg3);
  }
}
</script>

<template>
  <div
    id="StoreMapID"
    class="blog-shadow-dreamy"
    style="min-width: 200px; min-height: 400px;"
  ></div>
</template>

<style lang="scss" scoped>
.blog-shadow-dreamy {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
</style>
