<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageSeparatorSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);


/// Refs para los elementos a animar
const imageSeparatorSlice = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Verificar si estamos en el lado del cliente
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: "#separator-slice-video-trigger",
      triggerHook: 0.5, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 0 // move trigger to center of element
    })
    .setClassToggle("#separator-slice-video", "visible") // add class to reveal
		.addTo(controller);
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="separator-slice__container"
  >
    <div id="separator-slice-video-trigger" class="spacer s0"></div>
    <div id="separator-slice-video" class="separator-slice__column separator-slice__max1400" ref="imageSeparatorSlice">
      <PrismicImage :field="slice.primary.image" class="separator-slice__video"/>
    </div>
  </section>
</template>


<style>
  .separator-slice__container{
    position: relative;
    padding-bottom: 20px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .separator-slice__container::before{
    content: "";
    position: absolute;
    width: 100%;
    height: calc(50% + 20PX);
    bottom: 0;
    left: 0;
    background-color: #92A27F;
    z-index: 0;
  }
  .separator-slice__video{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    color: #fff;
    background-color: #000;
    position: relative;
    padding: 0;
    font-size: 10px;
    line-height: 1;
    font-weight: normal;
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
    word-break: initial;
  }

  #separator-slice-video{
    opacity: 0;
		transform: scale(0.9);
		transition: all 1s ease-in-out;
  }
  #separator-slice-video.visible{
    opacity: 1;
    transition: none;
  }
</style>
