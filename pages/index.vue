<template>
  <div>
    <!-- Comprueba si el documento está cargado -->
    <SliceZone v-if="document && document.data" :slices="document.data.slices" :components="components" />
    <div v-else class="loading-overlay">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { SliceZone, usePrismic } from '@prismicio/vue';

// Importa tus slices aquí
import Header from '../slices/Header/index.vue';
import Navigation from '../slices/Navigation/index.vue';
import Concept from '../slices/Concept/index.vue';
import ImageSeparator from '../slices/ImageSeparator/index.vue';
import Diferentiators from '../slices/Diferentiators/index.vue';
import Ubication from '../slices/Ubication/index.vue';
import Separator from '../slices/Separator/index.vue';
import Houses from '../slices/Houses/index.vue';
import Lots from '../slices/Lots/index.vue';
import Amenities from '../slices/Amenities/index.vue';
import Galery from '../slices/Galery/index.vue';
import Contact from '../slices/Contact/index.vue';

// Define los componentes de los slices
const components = {
  header: Header,
  navigation: Navigation,
  concept: Concept,
  image_separator: ImageSeparator,
  diferentiators: Diferentiators,
  ubication: Ubication,
  separator: Separator,
  houses: Houses,
  lots: Lots,
  amenities: Amenities,
  galery: Galery,
  contact: Contact,
};

const document = ref(null);
const { client } = usePrismic();

// Función para obtener datos de Prismic
const fetchData = async () => {
  try {
    const response = await client.getByUID('homars', 'homars');
    console.log('Fetched document:', response);
    document.value = response;
  } catch (error) {
    console.log('Error fetching document:', error);
  }
};

// Llama a fetchData cuando el componente se monte
onMounted(() => {
  fetchData();
});
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backgrounBlack);
  color: var(--greenStrongText);
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #007bff;
  border-top-color: transparent;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>

  