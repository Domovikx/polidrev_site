<script lang="ts">
import {
  ActionShowObject,
  ACTION__SNACKBAR__SHOW,
  GETTER__SNACKBAR__SHOW,
} from '@/store/modules/snackbar';
import { Vue, Component } from 'vue-property-decorator';

import { mapGetters, mapActions, mapMutations } from 'vuex';

@Component({
  methods: {
    ...mapActions([ACTION__SNACKBAR__SHOW]),
    ...mapMutations([]),
  },
  computed: mapGetters([GETTER__SNACKBAR__SHOW]),
})
export default class Snackbar extends Vue {
  public name: 'Snackbar';

  private multiLine: boolean;
  private text: string;
  private timeout: number;

  private data() {
    return {
      multiLine: true,
      text: `Snackbar text`,
      timeout: 10000,
    };
  }

  // computed
  private get snackbarShow(): boolean {
    return this[GETTER__SNACKBAR__SHOW].isShow;
  }
  private get snackbarMessage(): string {
    return this[GETTER__SNACKBAR__SHOW].message;
  }
  private set snackbarShow(isShow) {
    this[ACTION__SNACKBAR__SHOW]({
      isShow: false,
      message: '',
    } as ActionShowObject);
  }
}
</script>

<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbarShow"
      :multi-line="multiLine"
      :timeout="timeout"
    >
      {{ snackbarMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbarShow = false">
          закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style lang="scss" scoped></style>
