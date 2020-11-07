<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapActions, mapGetters, mapMutations } from 'vuex';

import { ACTION__FURNITURE_CATEGORY__CREATE_CATEGORY } from '@/store/modules/optionsFeatures/furnitureCategory';

@Component({
  methods: {
    ...mapActions([ACTION__FURNITURE_CATEGORY__CREATE_CATEGORY]),
    ...mapMutations([]),
  },
  computed: mapGetters([]),
})
export default class CategoryAdd extends Vue {
  public name: 'CategoryAdd';

  public category: string;

  private ACTION__FURNITURE_CATEGORY__CREATE_CATEGORY;

  private data() {
    return {
      category: '',
    };
  }

  private addCategory(): void {
    this[ACTION__FURNITURE_CATEGORY__CREATE_CATEGORY]({
      categoryTitle: this.category,
    });
    this.clearCategory();
  }

  private clearCategory(): void {
    this.category = '';
  }
}
</script>

<template>
  <v-form>
    <v-text-field
      v-model="category"
      label="Новая категория"
      clearable
      required
    ></v-text-field>
    <v-btn block @click="addCategory">
      Добавить новую категорию
    </v-btn>
  </v-form>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
}
</style>
