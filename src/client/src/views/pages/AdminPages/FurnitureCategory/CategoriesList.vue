<script lang="ts">
import {
  ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES,
  ACTION__FURNITURE_CATEGORY__UPDATE_CATEGORIES,
  GETTER__FURNITURE_CATEGORY__GET_CATEGORIES,
} from '@/store/modules/optionsFeatures/furnitureCategory';
import { Vue, Component } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
  methods: {
    ...mapActions([
      ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES,
      ACTION__FURNITURE_CATEGORY__UPDATE_CATEGORIES,
    ]),
  },
  computed: mapGetters([GETTER__FURNITURE_CATEGORY__GET_CATEGORIES]),
})
export default class CategoriesList extends Vue {
  public name: 'CategoriesList';

  get categories() {
    if (!this[GETTER__FURNITURE_CATEGORY__GET_CATEGORIES]) {
      this[ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES]();
    }
    const categories = this[GETTER__FURNITURE_CATEGORY__GET_CATEGORIES];

    return categories;
  }

  private updateCategories() {
    const categoriesFilter = Object.entries(
      this.categories,
    ).filter(([key, val]: any) => (val.categoryTitle ? true : false));

    const categories = Object.fromEntries(categoriesFilter);

    this[ACTION__FURNITURE_CATEGORY__UPDATE_CATEGORIES](categories);
  }
}
</script>

<template>
  <v-form>
    <v-card-title>Категории мебели:</v-card-title>

    <v-text-field
      v-for="value in categories"
      :key="value.id"
      v-model="value.categoryTitle"
      label="Категория мебели"
      placeholder="категория отсутствует"
      clearable
    ></v-text-field>
    <v-btn block @click="updateCategories" v-show="categories">
      Обновить категории
    </v-btn>
  </v-form>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
}
</style>
