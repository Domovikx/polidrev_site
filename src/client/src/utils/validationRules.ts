export const emailRules = [
  (v: string) => !!v || 'E-mail нужно заполнить',
  (v: string) =>
    /^[A-Za-z0-9]{1,}@[A-Za-z]{1,}\.[A-Za-z]{2,}$/.test(v) ||
    'E-mail указан неправильно',
];

export const passwordRules = [
  (v: string) => !!v || 'Password нужно заполнить',
  (v: string, passwordLength: number = 6) =>
    (v && v.length >= passwordLength) ||
    `Длинна пароля должна быть больше ${passwordLength} символов`,
];
