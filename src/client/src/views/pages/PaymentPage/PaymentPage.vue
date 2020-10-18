<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import PaymentMethods from './PaymentMethods.vue';
import PaymentInstallment from './PaymentInstallment.vue';

@Component({
  components: { PaymentMethods, PaymentInstallment },
})
export default class PaymentPage extends Vue {
  public name: 'PaymentPage';
  private data() {
    return {};
  }
}
</script>

<template>
  <v-container>
    <PaymentMethods></PaymentMethods>
    <PaymentInstallment></PaymentInstallment>
  </v-container>
</template>

<style lang="scss" scoped></style>
