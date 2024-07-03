<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SeparatorSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

/// Refs para los elementos a animar
const triggerSeparator = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Verificar si estamos en el lado del cliente
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: triggerSeparator.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "180%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerSeparator.value, "visible") // add class to reveal
    .addTo(controller);
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="separator"
  >
    <div id="triggerSeparator" class="separator-column" ref="triggerSeparator">
      <PrismicImage :field="slice.primary.imageseparator" />
    </div>
  </section>
</template>

<style>
  .separator{
    background-color: #3d3835;
    width: 100%;
    overflow: hidden;
  }
  .separator-column{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .separator-column img{
    width: 100%;
    height: auto;
  }

  #triggerSeparator {
    opacity: 0;
    transform: scale(1.3);
    transition: all 1s;
  }

  #triggerSeparator.visible {
    opacity: 1;
    transform: none;
  }
</style>