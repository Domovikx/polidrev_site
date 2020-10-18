<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import IconSupermarket from './IconSupermarket.vue';

@Component({
  components: { IconSupermarket },
})
export default class AllIconsPage extends Vue {
  public name: 'AllIconsPage';
}
</script>

<template>
  <ul class="wrapper">
    <li><IconSupermarket /> IconSupermarket</li>
  </ul>
</template>

<style lang="scss" scoped>
.svg {
  width: 40px;
  height: 40px;
  fill: brown;
  transition: 0.25s;
  &:hover {
    fill: #d1a054;
  }
}
.wrapper {
  display: grid;
  margin: 0 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  align-items: center;
  grid-row-gap: 10px;
}
li {
  display: grid;
  justify-items: center;
  grid-row-gap: 5px;
}
</style>
