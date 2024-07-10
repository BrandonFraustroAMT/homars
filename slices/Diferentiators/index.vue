<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.DiferentiatorsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

/// Refs para los elementos a animar
const triggerDifferentiatorTittle = ref<HTMLElement | null>(null);
const triggerDifferentiatorList = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Verificar si estamos en el lado del cliente
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: triggerDifferentiatorTittle.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "180%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerDifferentiatorTittle.value, "visible") // add class to reveal
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: triggerDifferentiatorList.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "180%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerDifferentiatorList.value, "visible") // add class to reveal
    .addTo(controller);
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="diferentiators-slice"
  >
    <div id="triggerDifferentiatorTittle" class="diferentiators-slice__column1 tittle-diferentiator" ref="triggerDifferentiatorTittle">
      <h2>
        <PrismicRichText :field="slice.primary.tittle" class="diferentiators-slice__title"/>
      </h2>
    </div>
    <div id="triggerDifferentiatorList" class="diferentiators-slice__column1 list-diferentiator max1400-diferentiator" ref="triggerDifferentiatorList">
      <template v-for="item in slice.primary.groupdifferentiators">
        <div class="diferentiator">
          <PrismicImage :field="item.icon" />
          <h3>{{ item.texticon }}</h3>
        </div>
      </template>
    </div>
    <div class="diferentiators-slice__column1 max1400-diferentiator" >
      <PrismicLink :field="slice.primary.linkbutton" class="diferentiator-slice__contact">
        <p class="header-slice__moreinfo-box">
          {{ slice.primary.labelbutton }}
        </p>
      </PrismicLink>
    </div>
  </section>
</template>

<style>
  .diferentiators-slice{
    position: relative;
    background-color: #91a27e;
    padding: 5% 5% 5%;
    margin-top: -5px;
  }
  .diferentiators-slice__column1{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tittle-diferentiator{
    padding-top: 3%;
    padding-bottom: 2%;
  }
  .diferentiators-slice__title{
    font-size: 2rem;
    font-family: 'Mirage Bold';
    color: var(--greenStrongText);
    margin-bottom: 10px;
    letter-spacing: 0.2rem;
  }
  #triggerDifferentiatorTittle {
    opacity: 0;
    transform: translateY(10px);
    transition: all 1s ease-in-out;
  }

  #triggerDifferentiatorTittle.visible {
    opacity: 1;
    transform: none;
  }


  .list-diferentiator{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .diferentiator{
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 50%;
  }
  .diferentiator img {
    width: 100%;
    height: auto;
    max-width: 140px;
  }
  .diferentiator h3 {
    font-size: 1rem;
    text-align: center;
    font-family: 'Mirage Medium';
    margin-top: 20px;
    color: var(--greenStrongText);
  }
  #triggerDifferentiatorList {
    opacity: 0;
    transform: translateY(10px);
    transition: all 1s ease-in-out;
  }

  #triggerDifferentiatorList.visible {
    opacity: 1;
    transform: none;
  }


  .diferentiator-slice__contact{
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
  .diferentiator-slice__contact::before{
    content: "";
    position: absolute;
    left: 7px;
    top: 7px;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border: 1px solid #5f7d78;
    border-radius: 5px;
  }
  .diferentiator-slice__contact:hover{
    letter-spacing: 2px;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    .max1400-diferentiator{
      max-width: 700px
    }
    .diferentiator{
      width: 25%;
    }
  }
  @media (min-width: 1100px) {
    .diferentiators-slice__title{
      font-size: 2rem;
    }
    .max1400-diferentiator{
      max-width: 1100px
    }
    .diferentiator{
      width: 25%;
    }
    .diferentiator h3 {
      font-size: 1.2vw;
    }
  }
  @media (min-width: 1280px) {
    .max1400-diferentiator{
      max-width: 1280px
    }
  }
  @media (min-width: 1440px) {
    .max1400-diferentiator{
      max-width: 1400px
    }
  }
</style>