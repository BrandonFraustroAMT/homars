<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AmenitiesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

/// Refs para los elementos a animar
const triggerAmenitiesTitle = ref<HTMLElement | null>(null);
const triggerAmenitiesList = ref<HTMLElement | null>(null);
const triggerAmenitiesBigTittle = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Verificar si estamos en el lado del cliente
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: triggerAmenitiesTitle.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerAmenitiesTitle.value, "visible") // add class to reveal
    .addTo(controller);

    /* Icons */
    new ScrollMagic.Scene({
      triggerElement: triggerAmenitiesList.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerAmenitiesList.value, "visible") // add class to reveal
    .addTo(controller);

    /* Text Image */
    new ScrollMagic.Scene({
      triggerElement: triggerAmenitiesBigTittle.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerAmenitiesBigTittle.value, "visible") // add class to reveal
    .addTo(controller);

    
    
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="sectionAmenities"
  >
    <div id="triggerAmenitiesTitle" class="amenities-slice__column amenities-slice__title" ref="triggerAmenitiesTitle">
      <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
    </div>
    <div id="triggerAmenitiesTitle" class="amenities-slice__column amenities-slice__list amenities-slice__max1400" ref="triggerAmenitiesList">
      <template v-for="item in slice.primary.groupamenities">
        <div class="amenities-slice__amenitie">
          <PrismicImage :field="item.icon" />
          <h3>{{ item.label }}</h3>
        </div>
      </template>
    </div>
    <div class="amenities-slice__column amenities-slice__big amenities-slice__max1400" >
      <div id="triggerAmenitiesBigTittle" class="amenities-slice__big-title amenities-slice__max1200" ref="triggerAmenitiesBigTittle">
        <h3>{{ slice.primary.subtittle }}</h3>
      </div>
      <PrismicImage :field="slice.primary.imageamenitie" />
    </div>

    <div class="amenities-slice__column amenities-slice__button" >
      <PrismicLink :field="slice.primary.linkbutton" class="amenities-slice__contact">
        <p class="amenities-slice__moreinfo-box">
          {{ slice.primary.labelbutton }}
        </p>
      </PrismicLink>
    </div>
  </section>
</template>


<style>
  .sectionAmenities{
    position: relative;
    background-color: #004036;
    padding: 7% 5%;
  }
  .amenities-slice__column{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .amenities-slice__title h2{
    font-size: 4vw;
    font-family: 'Mirage', sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 400;
    color: #949769;
    margin-bottom: 10px;
  }
  #triggerAmenitiesTitle{
    opacity: 0;
    transform: scale(0.9);
    transition: all 1s ease-in-out;
  }
  #triggerAmenitiesTitle.visible{
    opacity: 1;
    transform: none;
  }
  #triggerAmenitiesBigTittle{
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-in-out;
  }
  #triggerAmenitiesBigTittle.visible{
    opacity: 1;
    transform: none;
  }

  .amenities-slice__max1400{
    max-width: 1400px
  }
  .amenities-slice__list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .amenities-slice__amenitie{
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 45%;
  }
  .amenities-slice__amenitie img{
    width: 100%;
    height: auto;
    max-width: 140px;
  }
  .amenities-slice__amenitie h3{
    font-size: 1rem;
    text-align: center;
    margin-top: 20px;
    font-weight: 200;
    color: #949769;
    font-family: 'Mirage', sans-serif;
    margin-bottom: 10px;
  }
  .amenities-slice__big{
    padding-top: 130px;
    margin-top: 5%;
    margin-bottom: 7%;
  }
  .amenities-slice__big-title{
    position: absolute;
    top: 0;
  }
  .amenities-slice__max1200{
    max-width: 1200px;
  }
  .amenities-slice__big-title h3{
    color: #dbd6c9;
    font-size: 3.5rem;
    font-family: 'Mirage', sans-serif;
    font-weight: 200;
    line-height: 1;
    text-align: center;
    text-shadow: 0px 10px 6px rgba(0,0,0,0.3);
  }

  .amenities-slice__contact{
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
  .amenities-slice__contact::before{
    content: "";
    position: absolute;
    left: 7px;
    top: 7px;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border: 1px solid #5f7d78;
    border-radius: 5px;
  }
  .amenities-slice__contact:hover{
    letter-spacing: 2px;
    cursor: pointer;
  }
  @media (min-width: 640px) {
    .amenities-slice__amenitie{
      width: 33.33%;
    }
  }
  @media (min-width: 1100px) {
    .amenities-slice__amenitie{
      width: 33.33%;
    }
    .amenities-slice__amenitie h3{
      font-size: 0.9vw;
    }
    .amenities-slice__big-title h3{
      font-size: 120px;
    }
  }
</style>