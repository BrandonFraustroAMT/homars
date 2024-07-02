import * as prismic from '@prismicio/client';
import { PrismicVue } from '@prismicio/vue';
import { createApp } from 'vue';
import App from './App.vue';

const endpoint = prismic.getEndpoint('homars');
const client = prismic.createClient(endpoint, {
  // Configura tu cliente Prismic (por ejemplo, con un token de acceso si es necesario)
});

const app = createApp(App);

app.use(PrismicVue, { client });

app.mount('#app');
