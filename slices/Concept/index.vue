<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ConceptSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

/// Refs para los elementos a animar
const trigger = ref<HTMLElement | null>(null);
const conceptSliceText = ref<HTMLElement | null>(null);
const conceptSliceImage = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Verificar si estamos en el lado del cliente
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: trigger.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "150%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(trigger.value, "visible") // add class to reveal
    .addTo(controller);

    /* Text */
    new ScrollMagic.Scene({
      triggerElement: conceptSliceText.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(conceptSliceText.value, "visible") // add class to reveal
    .addTo(controller);

    /* Image */
    new ScrollMagic.Scene({
      triggerElement: conceptSliceText.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "150%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(conceptSliceImage.value, "visible") // add class to reveal
    .addTo(controller);
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="concept-slice__container"
  >
    <div id="reveal1" class="concept-slice__column1 concept-slice__phrase" ref="trigger">
        <h1 class="concept-slice__phrase-title" ref="">
          <PrismicRichText :field="slice.primary.tittle" />
        </h1>
    </div>
    <div class="concept-slice__column2 concept-slice__the-concept" >
      <div id="reveal-concept-image" class="concept-slice__rigthCol" ref="conceptSliceImage">
        <PrismicImage :field="slice.primary.imageconcept" />
      </div>
      <div id="reveal-concept-slice"class="concept-slice__leftCol"  ref="conceptSliceText">
        <h2 class="concept-slice__leftCol-subtitle">{{ slice.primary.subtittle }}</h2>
        <div class="concept-slice__richText">
          <p>{{ slice.primary.description }}</p>
          <p>{{ slice.primary.description2 }}</p>
        </div>
        <PrismicLink :field="slice.primary.linkbutton" class="concept-slice__btn concept-slice__agendarbtn">
          {{ slice.primary.labelbutton }}
        </PrismicLink>
      </div>
      
    </div>
  </section>
</template>

<style>
  .concept-slice__container{
    background-color: #F5EADF;
    padding-bottom: 10%;
  }
  .concept-slice__column1{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .concept-slice__phrase{
    padding: 8rem 2rem;
    height: auto;
    text-align: center;
  }

  #reveal1 {
    opacity: 0;
    transform: scale(0.9);
    transition: all 1s ease-in-out;
  }

  #reveal1.visible {
    opacity: 1;
    transform: none;
  }


  .concept-slice__phrase-title{
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 1.2;
    font-family: 'Mirage', sans-serif;
    color: var(--blueTittle);
    text-align: center;
    width: 100%;
  }
  .concept-slice__column2{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .concept-slice__leftCol{
    width: 100%;
    padding: 5% 5%;
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .concept-slice__leftCol-subtitle{
    font-size: 2rem;
    font-family: 'Mirage', sans-serif;
    font-weight: 400;
    color: var(--greenText);
    margin-bottom: 10px;
  }
  .concept-slice__richText{
    padding: 10px 0;
  }
  .concept-slice__richText p {
    font-size: 1rem;
    line-height: 1.7;
    font-weight: 100;
    font-family: 'Mirage', sans-serif;
    color: var(--greenStrongText);
  }
  #reveal-concept-slice{
    opacity: 0;
    transform: translateY(60px);
    transition: all 1s ease-in-out;
  }
  #reveal-concept-slice.visible{
    opacity: 1;
    transform: none;
  }
  #reveal-concept-image{
    opacity: 0;
    transform: translateX(60px);
    transition: all 1s ease-in-out;
  }
  #reveal-concept-image.visible{
    opacity: 1;
    transform: none;
  }


  .concept-slice__btn{
    background-color: #0d3c35;
    border-radius: 10px;
    color: var(--white);
    line-height: 1;
    padding: 18px 40px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
    transition: letter-spacing 0.2s ease-in-out;
    text-decoration: none;
  }
  .concept-slice__btn::before{
    content: "";
    position: absolute;
    left: 7px;
    top: 7px;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border: 1px solid #5f7d78;
    border-radius: 5px;
  }
  .concept-slice__btn:hover{
    letter-spacing: 2px;
    cursor: pointer;
  }

  @media (min-width: 1100px) {
    .concept-slice__column2{
      flex-direction: row;
    }
    .concept-slice__leftCol{
      width: 40%;
      padding: 0% 5%;
      flex-direction: column !important;
      align-items: flex-start !important;
      justify-content: center !important;
    }
    .concept-slice__phrase-title{
      font-size: 5vw;
      width: 45%;
    }
    .concept-slice__leftCol-subtitle{
      font-size: 1.6vw;
    }
    .concept-slice__richText p {
      font-size: 1.1vw;
    }
  }
</style>