<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// State for Swiper and currentIndex
const modules = ref<[any]>([Navigation]); // Ensure correct module import
const currentIndexSlider = ref<number>(0);


// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HousesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
/* const currentIndexSlider = ref(0);
const currentIndexSlider = (index: number) => {
    currentIndex.value = index;
  }; */
  
/* Funcionalidad para filtrar */
const currentIndex = ref(0);
const setCurrentIndex = (index: number) => {
    currentIndex.value = index;
  };

/// Refs para los elementos a animar
const triggerHousesTitle = ref<HTMLElement | null>(null);
const triggerHousesButtons = ref<HTMLElement | null>(null);
const triggerHousesSlider = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Verificar si estamos en el lado del cliente
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: triggerHousesTitle.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "180%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerHousesTitle.value, "visible") // add class to reveal
    .addTo(controller);

    /* Buttons */
    new ScrollMagic.Scene({
      triggerElement: triggerHousesButtons.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "180%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerHousesButtons.value, "visible") // add class to reveal
    .addTo(controller);

    /* Slider */
    new ScrollMagic.Scene({
      triggerElement: triggerHousesSlider.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "180%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerHousesSlider.value, "visible") // add class to reveal
    .addTo(controller);
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="houses-section"
  >
    <div id="triggerHousesTitle" class="houses-slice__column houses-slice__title" ref="triggerHousesTitle">
      <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
    </div>
    <!-- Botones Modelo -->
    <div id="triggerHousesTitle" class="houses-slice__pagination" ref="triggerHousesButtons">
     <template v-for="(item, index) in slice.primary.groupbuttons" :key="index">
       <button class="houses-slice__page" @click="setCurrentIndex(index)">{{ item.labelbutton }}</button>
     </template>
    </div>
    <div id="triggerHousesTitle" class="houses-slice__column houses-slice__slider" ref="triggerHousesSlider">
      <div class="houses-slice__slider-left" >
        <h3>{{ slice.primary.subtittle }}</h3>
        <!-- Medidas -->
         <ul class="houses-slice__measures">
           <template v-for="item in slice.primary.groupfirstsection">
             <li>{{ item.label1 }} <strong>{{ item.label2 }}</strong></li>
           </template>
         </ul>
        <div class="houses-slice__richText houses-slice__characteristics">
          <div class="houses-slice__characteristics1">
            <p>{{ slice.primary.firstfloor }}</p>
            <ul>
              <template v-for="item in slice.primary.groupfirstfloor">
                <li>{{ item.label }}</li>
              </template>
            </ul>
          </div>
          <div class="houses-slice__characteristics1">
            <p>{{ slice.primary.secondfloor }}</p>
            <ul>
              <template v-for="item in slice.primary.groupsecondfloor">
                <li>{{ item.label }}</li>
              </template>
            </ul>
            
            <p>{{ slice.primary.thirdfloor }}</p>
            <ul>
              <template v-for="item in slice.primary.groupthirdfloor">
                <li>{{ item.label }}</li>
              </template>
            </ul>
          </div>
        </div>
        <div class="houses-slice__prices">
          <p class="houses-slice__prices-first">
            {{ slice.primary.pricetext }} <strong>{{ slice.primary.pricenumber }}</strong>
          </p>
          <p class="houses-slice__prices-second">{{ slice.primary.pricedescription }}</p>
        </div>
      </div>
      <!-- SLIDER -->
      <div class="houses-slice__slider-right" >
        <swiper :navigation="true" :modules="modules" class="mySwiper" v-for="(item, index) in slice.primary.groupbuttons" :key="index" v-show="currentIndex === index">
          <swiper-slide><PrismicImage :field="item.image1" /></swiper-slide>
          <swiper-slide><PrismicImage :field="item.image2" /></swiper-slide>
          <swiper-slide><PrismicImage :field="item.image3" /></swiper-slide>
        </swiper>
      </div>
      
      
    </div>
    <div class="houses-slice__column houses-slice__button" >
      <PrismicLink :field="slice.primary.linkbutton" class="diferentiator-slice__contact">
        <p class="header-slice__moreinfo-box">
          {{ slice.primary.labelbutton }}
        </p>
      </PrismicLink>
    </div>
  </section>
</template>

<style>
  .houses-section{
    position: relative;
    background-color: #edebe8;
    padding: 8% 0% 0%;
  }
  .houses-slice__column{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .houses-slice__title{
    padding-bottom: 3%;
  }
  #triggerHousesTitle{
    opacity: 0;
    transform: translateY(60px);
    transition: all 1s ease-in-out;
  }
  #triggerHousesTitle.visible{
    opacity: 1;
    transform: none;
  }
  .houses-slice__title h2{
    font-size: 4vw;
    font-family: 'Mirage Bold';
    color: #949769;
    margin-bottom: 10px;
  }
  .houses-slice__pagination{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }
  .houses-slice__page{
    background-color: #858857;
    outline: none;
    border: 1px solid #858857;
    padding: 10px;
    border-radius: 10px;
    color: #edebe8;
    margin-right: 10px;
  }
  .houses-slice__page:hover{
    background-color: #9a9e82;
    border: 1px solid #9a9e82;
    cursor: pointer;
  }
  
  .houses-slice__slider{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }
  .houses-slice__slider-left{
    width: 100%;
    padding-top: 2rem;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  }
  .houses-slice__slider-left h3{
    color: #006c5b;
    font-family: 'Mirage Medium';
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .houses-slice__measures{
    list-style-type: disc;
  }
  .houses-slice__characteristics1 {
    width: 45%;
  }
  .houses-slice__measures li{
    list-style: none;
    padding-left: 0px;
    font-size: 18px;
    line-height: 1.5;
    font-family: 'Mirage Regular';
    color: #092e29;
  }
  .houses-slice__characteristics{
    border-top: 1px solid #949769;
    border-bottom: 1px solid #949769;
    column-count: 2;
    padding: 20px 0px;
    margin: 20px 0px;
  }
  .houses-slice__richText{
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
  .houses-slice__characteristics p{
    font-family: 'Mirage Regular';
    margin-bottom: 0;
    margin-top: 0;
    font-size: 18px;
    line-height: 1.7;
    color: #092e29;
  }
  .houses-slice__characteristics ul{
    margin: 0;
    padding: 0 0 10px;
  }
  .houses-slice__characteristics li{
    list-style: none;
    padding-left: 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 18px;
    color: #092e29;
  }
  .houses-slice__characteristics li::before{
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: #949769;
    padding-right: 8px;
    margin-top: 8px;
    margin-right: 3px;
  }
  .houses-slice__prices-first{
    font-size: 24px;
    line-height: 1.5;
    color: #092e29;
  }
  .houses-slice__prices-first::after{
    content: "*";
    color: #f30;
  }
  .houses-slice__prices-second{
    font-size: 16px;
    line-height: 1.5;
    color: #092e29;
  }
  .houses-slice__prices-second::before{
    content: "*";
    color: #f30;
    display: inline-block;
    transform: scale(1.4);
  }


  .houses-slice__slider-right{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
  
  .houses-slice__button{
    padding-top: 3%;
    padding-bottom: 7%;
  }
  .houses-slice__button::after{
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: calc(100% - 20%);
    background-color: #949769;
    bottom: 0;
  }

  @media (min-width: 1100px) {
    .houses-slice__slider{
      flex-direction: row;
      padding: 0 8rem;
    }
    .houses-slice__slider-left{
      width: 40%;
      padding-top: 0;
      align-items: flex-start;
    }
    .houses-slice__slider-left h3{
      font-size: 1.6vw;
    }
    .houses-slice__slider-right{
      width: 60%;
    }
  }
</style>