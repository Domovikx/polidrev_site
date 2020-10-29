<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { emailRules, passwordRules } from '../../../utils/validationRules';

@Component
export default class LoginPage extends Vue {
  public name: 'LoginPage';

  public email: boolean;
  public userRole: string;
  public password: string;
  public passwordShow: boolean;
  public valid: boolean;
  public lazy: boolean;

  private data() {
    return {
      email: '',
      userRole: '',
      password: '',
      passwordShow: false,
      valid: true,
      lazy: false,

      // imports
      emailRules,
      passwordRules,
    };
  }

  private isShowPassword(): void {
    this.passwordShow = !this.passwordShow;
  }

  private goToPath(path): void {
    this.$router.push(path);
  }
}
</script>

<template>
  <v-container class="container fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar flat class="primary white--text">
            <v-toolbar-title class="toolbar-title">Вход</v-toolbar-title>
            <v-btn
              text
              class="toolbar-btn primary white--text"
              @click="goToPath('/')"
            >
              X
            </v-btn>
          </v-toolbar>

          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                required
                v-model="email"
                v-model.trim="email"
                :rules="emailRules"
                type="text"
                name="email"
                label="E-mail"
                placeholder="E-mail"
                prepend-icon="mdi-email"
              ></v-text-field>

              <v-text-field
                required
                counter
                v-model="password"
                :rules="passwordRules"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="passwordShow ? 'text' : 'password'"
                @click:append="isShowPassword"
                name="password"
                label="Password"
                placeholder="Password"
                prepend-icon="mdi-lock"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions class="btn-wrapper">
            <v-btn block class="primary white--text" :disabled="!valid">
              Вход
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-content: flex-start;
}
.card_register {
  min-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.toolbar-title {
  margin: 0 auto 0 16px;
}
.toolbar-btn {
  margin: 0 10px 0 auto;
}
.btn-wrapper {
  padding: 0 16px 16px;
}
</style>
