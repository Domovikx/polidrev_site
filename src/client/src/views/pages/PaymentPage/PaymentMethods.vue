<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PaymentMethods extends Vue {
  public name: 'PaymentMethods';
  private data() {
    return {};
  }
}
</script>

<template>
  <section class="payment-methods">
    <header class="header">
      <span>Удобные способы оплаты:</span>
    </header>

    <ul class="list">
      <li class="blog-shadow-dreamy">
        <v-img
          class="v-img"
          src="../../../assets/img-001/nal.webp"
          max-height="59"
          max-width="50"
        >
        </v-img>
        <div>Наличными</div>
      </li>

      <li class="blog-shadow-dreamy">
        <v-img
          class="v-img"
          src="../../../assets/img-001/card.webp"
          max-height="50"
          max-width="50"
        >
        </v-img>
        <div>Карточкой</div>
      </li>

      <li class="blog-shadow-dreamy">
        <v-img
          class="v-img"
          src="../../../assets/img-001/erip.webp"
          max-height="57"
          max-width="60"
        >
        </v-img>
        <div>ЕРИП</div>
      </li>

      <li class="blog-shadow-dreamy">
        <v-img
          class="v-img"
          src="../../../assets/img-001/ibank.webp"
          max-height="53"
          max-width="50"
        >
        </v-img>

        <div>Интернет-банк</div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.payment-methods {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 100px auto;

  .header {
    grid-column: 1;
    grid-row: 1;
    z-index: 1;
  }

  .list {
    grid-column: 1;
    grid-row: 2;
    z-index: 1;
    grid-template-columns: repeat(auto-fit, 120px);
    gap: 16px;
  }
}

.header {
  font-size: 1.5rem;
  padding: 0 20px;
  display: grid;
  justify-content: start;
  align-content: center;
  line-height: 1.25;
}

.list {
  padding: 0 20px 20px;
  display: grid;
  justify-content: start;
  align-content: start;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  min-width: 120px;
  min-height: 120px;
  display: grid;
  place-content: center;
  justify-items: center;
  border-radius: 16px;
}

.payment-methods-img {
  border-radius: 4px;
}

.blog-shadow-dreamy {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
</style>
