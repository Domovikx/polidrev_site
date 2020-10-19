<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PaymentInstallment extends Vue {
  public name: 'PaymentInstallment';
}
</script>

<template>
  <section class="payment-methods">
    <header class="header">
      <span>Рассрочка платежа:</span>
    </header>

    <ul class="list" elevation-4>
      <li>
        <v-img
          class="v-img blog-shadow-dreamy"
          src="../../../assets/img-002/5c0a8ccde8fcf731349e0e5ac83c3fea.webp"
          max-width="280"
          max-height="176"
        >
        </v-img>
        <article>
          <header>Рассрочка по «Карте покупок»</header>
          <div>
            <p>
              Производите оплату «Картой покупок» и получайте, 2 месяца
              рассрочки на все группы товаров и на всю сумму платежа!
            </p>
            <p>
              Используя «Карту покупок», Вы приобретаете товары сейчас, а
              оплачиваете их стоимость позже без процентов, комиссий и переплат!
              Также возможно досрочное погашение!
            </p>
          </div>
        </article>
      </li>

      <li>
        <v-img
          class="v-img blog-shadow-dreamy"
          src="../../../assets/img-002/05693f83ce249641bc811b4e2704a44b378a3d29.webp"
          max-width="280"
          max-height="176"
        >
        </v-img>
        <article>
          <header>Халва Max/Mix</header>
          <div>
            <p>
              Карта рассрочки «Халва» от МТБанка — это 2 месяца рассрочки на
              любой товар в нашем интернет- магазине без переплат. Купить в
              рассрочку по «Халве» и «Карте покупок» просто, оплата возможна
              несколькими способами:
            </p>
            <p>
              - через терминал при доставке курьером (оговаривается с
              менеджером); <br />
              - по терминалу на нашем складе при самовывозе товара.
            </p>
          </div>
        </article>
      </li>

      <li>
        <v-img
          class="v-img blog-shadow-dreamy"
          src="../../../assets/img-002/de25b0cca8ebcc5b951a81d6ab85a3af.webp"
          max-width="280"
          max-height="178"
          elevation-4
        >
        </v-img>
        <article>
          <header>Карта Fun</header>
          <div>
            <p>
              Производите оплату.
            </p>

            <p>Срок погашения кредита</p>
            <p>при отсрочке — до 2 месяцев;</p>
            <p>
              при рассрочке — от 3 месяцев (в зависимости от договорных
              отношений с магазинами-партнерами);
            </p>
            <p>по овердрафтному кредиту — до 36 месяцев.</p>

            <p>Максимальная сумма 10 000 BYN;</p>

            <p>
              предоставление кредитов в сумме до 5 000 BYN возможно без
              предоставления справки о доходах (кроме заявителей, получающих
              доход от предпринимательской деятельности).
            </p>
          </div>
        </article>
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
    grid-template-columns: repeat(auto-fit, auto);
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
  display: grid;

  grid-template: repeat(auto-fit, minmax(100px, auto)) / repeat(
      auto-fit,
      minmax(300px, auto)
    );

  header {
    margin-bottom: 16px;
  }
}

.v-img {
  border-radius: 16px;
  margin-bottom: 16px;
}

.blog-shadow-dreamy {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
</style>
