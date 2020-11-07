<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CategoriesList from './CategoriesList.vue';
import CategoryAdd from './CategoryAdd.vue';

@Component({
  components: {
    CategoriesList,
    CategoryAdd,
  },
})
export default class FurnitureCategory extends Vue {
  public name: 'FurnitureCategory';
}
</script>

<template>
  <v-container>
    <CategoriesList></CategoriesList>
    <CategoryAdd></CategoryAdd>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
}
</style>
