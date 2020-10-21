# client

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Examples and notes

навигационная панель пример:

- https://codepen.io/JamieCurnow/pen/GYxgYj

vue typescript component:

- https://www.digitalocean.com/community/tutorials/vuejs-typescript-class-components
- https://habr.com/ru/post/351216/

materialdesignicons:

- https://cdn.materialdesignicons.com/5.4.55/

Vue-yandex-maps:

- https://vue-yandex-maps.github.io/guide/ - не понравилась, нет поддержки TS

! Для подключения яндекс карты во VUE

```html
<!-- index.html > yandex-map > подключаем библиотеку
  поменять apikey -->
<script src="https://api-maps.yandex.ru/2.1?apikey=0&load=package.full&lang=ru_RU"></script>
```

в нужном компоненте добавляем логики и место для рендоринга

```ts
  // Lifecycle hook
private created() {
  // @ts-ignore
  ymaps.ready(function() {
    // @ts-ignore
    const myMap = new ymaps.Map('YMapsID', {
      center: [55.76, 37.64],
      zoom: 10,
    });
  });
}
```

и энтри поинт карты

```html
<div id="YMapsID" style="min-width: 200px; min-height: 400px;"></div>
```

- https://yandex.ru/dev/maps/jsbox/2.1/mapbasics - документация по добавлению карты yandex

## firebase

https://console.firebase.google.com/project/polidrev-site/overview

!!! public directory УКАЗАТЬ - dist

- firebase init  
  ? What do you want to use as your public directory? dist  
  ? Configure as a single-page app (rewrite all urls to /index.html)? Yes  
  ? Set up automatic builds and deploys with GitHub? No  
  ? File dist/404.html already exists. Overwrite? Yes  
  ? File dist/index.html already exists. Overwrite? No

- firebase deploy
