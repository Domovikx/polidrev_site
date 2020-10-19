<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import MapWarehouseShop from './MapWarehouseShop.vue';
import MapOfStores from './MapOfStores.vue';

@Component({
  components: { MapWarehouseShop, MapOfStores },
})
export default class WhereToBuyPage extends Vue {
  public name: 'WhereToBuyPage';
}
</script>

<template>
  <v-container>
    <section>
      <header class="header">Склад-магазин "Полидрев"</header>
      <p>
        Витебский район, аг. Октябрьская, ул.Октябрьская, 7
      </p>
      <p>
        Время работы склад-магазина: <br />
        Пн-Пт: с 8.30 до 18.30 (без обеда)<br />
        Суббота: с 09.30 до 14.30. <br />
        Воскресенье: Выходной
      </p>
    </section>

    <MapWarehouseShop></MapWarehouseShop>

    <section>
      <header class="header">Где купить мебель "Полидрев"</header>
      <p>
        <b>ООО "БелАртМебель":</b><br />
        ул.Чкалова, 19/1<br />
        пр-т Московский, 64<br />
        ул.39-й Армии, 22<br />
        ул.Ленина, 48<br />
        ул.Советской Армии, 4
      </p>

      <p><b>Торговый Дом "Витязь"</b> - П.Бровки д.13/10</p>

      <p><b>Торговый Дом (г.Полоцк)</b> - г.Полоцк ул.Гоголя,16</p>

      <p>
        <b>ОАО "Витебский Хозторг" :</b><br />
        ул.1-я Пролетарская, 3<br />
        ул.Чкалова, 17/2<br />
        г.Новополоцк ул.Молодежная, 40
      </p>
    </section>

    <MapOfStores></MapOfStores>
  </v-container>
</template>

<style lang="scss" scoped>
.header {
  font-size: 1.5rem;
  padding: 20px 0;
  line-height: 1.25;
}
.v-img {
  border-radius: 4px;
}
</style>
