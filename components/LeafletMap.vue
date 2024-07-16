<template>
  <div id="map" :style="{ height: '500px', width: '100%' }"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'LeafletMap',
  setup() {
    onMounted(async () => {
      if (typeof window !== 'undefined') {
        // Import Leaflet solo en el lado del cliente
        const { default: L } = await import('leaflet');
        await import('leaflet/dist/leaflet.css');
        
        const map = L.map('map').setView([25.445144, -100.899167], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        L.marker([25.445144, -100.899167]).addTo(map)
          .bindPopup('El molino')
          .openPopup();
      }
    });

    return {};
  },
});
</script>

<style scoped>
    #map {
      height: 500px;
      width: 100%;
    }
</style>
  