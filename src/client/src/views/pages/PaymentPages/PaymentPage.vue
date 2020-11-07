<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PaymentMethods from './PaymentMethods.vue';
import PaymentInstallment from './PaymentInstallment.vue';

@Component({
  components: { PaymentMethods, PaymentInstallment },
})
export default class PaymentPage extends Vue {
  public name: 'PaymentPage';
}
</script>

<template>
  <v-container>
    <PaymentMethods></PaymentMethods>
    <PaymentInstallment></PaymentInstallment>
  </v-container>
</template>

<style lang="scss" scoped></style>
