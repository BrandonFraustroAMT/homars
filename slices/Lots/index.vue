<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.LotsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

/// Refs para los elementos a animar
const triggerLotsTitle = ref<HTMLElement | null>(null);
const triggerLotsImage = ref<HTMLElement | null>(null);
const triggerLotsText = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Verificar si estamos en el lado del cliente
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: triggerLotsTitle.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerLotsTitle.value, "visible") // add class to reveal
    .addTo(controller);

    /* Text */
    new ScrollMagic.Scene({
      triggerElement: triggerLotsImage.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerLotsImage.value, "visible") // add class to reveal
    .addTo(controller);

    /* Image */
    new ScrollMagic.Scene({
      triggerElement: triggerLotsText.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerLotsText.value, "visible") // add class to reveal
    .addTo(controller);
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="sectionLots"
  >
    <div id="triggerLotsTitle" class="lots-slice__column1 title-lots" ref="triggerLotsTitle">
      <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
    </div>
    <div class="lots-slice__column2" >
      <div id="triggerLotsImage" class="lots-slice__left-column" ref="triggerLotsImage">
        <PrismicImage :field="slice.primary.imagelots" />
      </div>
      <div id="triggerLotsText" class="lots-slice__right-column" ref="triggerLotsText">
        <div class="lots-slice__richText">
          <p>{{ slice.primary.description }}</p>
          <p>{{ slice.primary.description2 }}</p>
        </div>
        <ul class="lots-slice__gallery">
          <template v-for="item in slice.primary.grouplots">
            <li>
              <p>
                <strong>{{ item.subtittle }}</strong>
                {{ item.description }}
              </p>
              <PrismicLink :field="item.linkbutton" class="lots-slice__big">
                {{ item.labelbutton }}
              </PrismicLink>
            </li>
          </template>
        </ul>

        <PrismicLink :field="slice.primary.linkbutton" class="slots-slice__btn slots-slice__agendarbtn">
          {{ slice.primary.labelbutton }}
        </PrismicLink>
      </div>
    </div>
  </section>
</template>


<style>
  .sectionLots{
    position: relative;
    background-color: #edebe8;
    padding: 7% 0% 10% 0%;
  }
  .lots-slice__column1{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title-lots{
    padding-bottom: 4%;
  }
  .title-lots h2{
    font-size: 4vw;
    font-family: 'Mirage', sans-serif;
    color: #949769;
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
  #triggerLotsTitle {
    opacity: 0;
    transform: scale(0.9);
    transition: all 1s ease-in-out;
  }
  #triggerLotsTitle.visible {
    opacity: 1;
    transform: none;
  }


  .lots-slice__column2{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .lots-slice__left-column{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #triggerLotsImage {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease-in-out;
  }
  #triggerLotsImage.visible {
    opacity: 1;
    transform: none;
  }


  .lots-slice__right-column{
    padding: 1rem 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #triggerLotsText {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-in-out;
  }
  #triggerLotsText.visible {
    opacity: 1;
    transform: none;
  }

  .lots-slice__richText p{
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.7;
    font-family: 'Mirage', sans-serif;
    color: #092e29;
    text-align: justify;
  }
  .lots-slice__gallery{
    margin: 0;
    padding: 0;
    width: 100%
  }
  .lots-slice__gallery li{
    list-style: none;
    border-bottom: 1px solid #d5d0c9;
    padding: 14px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    width: 100%;
  }
  .lots-slice__gallery li:first-child{
    border-top: 1px solid #d5d0c9;
  }
  .lots-slice__gallery li p{
    line-height: 1.7;
    font-family: 'Mirage', sans-serif;
    font-weight: 200;
    color: #092e29;
    font-size: 18px;
    width: 100%;
  }
  .lots-slice__big{
    background-color: #fff;
    padding: 10px 10px;
    border-radius: 8px;
    font-weight: 200;
    color: #006c5b;
    margin-top: 10px !important;
    display: block;
    width: 160px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
  .lots-slice__big:hover{
    background-color: #006c5b;
    color: #fff;
  }



  .slots-slice__btn{
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
  .slots-slice__btn::before{
    content: "";
    position: absolute;
    left: 7px;
    top: 7px;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border: 1px solid #5f7d78;
    border-radius: 5px;
  }
  .slots-slice__btn:hover{
    letter-spacing: 2px;
    cursor: pointer;
  }

  @media (min-width: 1100px){
    .sectionLots{
      padding: 7% 5% 10% 0%;
    }
    .lots-slice__column2{
      flex-direction: row;
    }
    .lots-slice__left-column{
      width: 50%;
    }
    .lots-slice__right-column{
      padding-left: 5%;
      width: 50%;
      align-items: flex-start;
    }
    .lots-slice__gallery li{
      flex-direction: row;
    }
    .lots-slice__gallery li::before{
      content: "";
      position: relative;
      width: 6px;
      height: 6px;
      background-color: #949769;
      margin-right: 8px;
    }
    .lots-slice__gallery li p{
      width: calc(100% - 160px);
      padding-right: 10%;
    }
    .lots-slice__big{
      background-color: #fff;
      padding: 10px 10px;
      border-radius: 8px;
      font-weight: 200;
      color: #006c5b;
      margin-top: 0px !important;
      display: block;
      width: 160px;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    }
  }
</style>