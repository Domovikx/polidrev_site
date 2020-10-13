<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HomePage extends Vue {
  public name: 'HomePage';
  private data() {
    return {};
  }
}
</script>

<template>
  <v-container>HomePage</v-container>
</template>
