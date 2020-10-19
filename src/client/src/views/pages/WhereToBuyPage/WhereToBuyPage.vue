<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import YandexMap from './YandexMap.vue';

@Component({
  components: { YandexMap },
})
export default class WhereToBuyPage extends Vue {
  public name: 'WhereToBuyPage';
  private data() {
    return {};
  }
}
</script>

<template>
  <v-container>
    WhereToBuyPage

    <YandexMap></YandexMap>
  </v-container>
</template>

<style lang="scss" scoped>
.v-img {
  border-radius: 4px;
}
</style>
