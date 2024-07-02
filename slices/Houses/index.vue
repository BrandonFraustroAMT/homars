<script setup lang="ts">
import { type Content } from "@prismicio/client";

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
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="houses-section"
  >
    <div class="houses-slice__column houses-slice__title" >
      <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
    </div>
    <!-- Botones Modelo -->
    <div class="houses-slice__pagination">
     <template v-for="item in slice.primary.groupbuttons">
       <button class="houses-slice__page" >{{ item.labelbutton }}</button>
     </template>
    </div>
    <div class="houses-slice__column houses-slice__slider" >
      <div>

      </div>
      <div class="houses-slice__slider-left" >
        <h3>{{ slice.primary.subtittle }}</h3>
        <!-- Medidas -->
         <ul class="houses-slice__measures">
           <template v-for="item in slice.primary.groupfirstsection">
             <li>{{ item.label1 }} <strong>{{ item.label2 }}</strong></li>
           </template>
         </ul>
        <div class="houses-slice__richText houses-slice__characteristics">
          <div>
            <p>{{ slice.primary.firstfloor }}</p>
            <ul>
              <template v-for="item in slice.primary.groupfirstfloor">
                <li>{{ item.label }}</li>
              </template>
            </ul>
          </div>
          <div>
            <p>{{ slice.primary.secondfloor }}</p>
            <ul>
              <template v-for="item in slice.primary.groupsecondfloor">
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
        <template v-for="item in slice.primary.groupbuttons">
          <PrismicImage :field="item.image1" />
        </template>
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
  .houses-slice__title h2{
    font-size: 4vw;
    font-family: 'Roboto', sans-serif;
    color: #949769;
    margin-bottom: 10px;
    font-weight: 200;
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
  }
  
  .houses-slice__slider{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 8rem;
  }
  .houses-slice__slider-left{
    width: 40%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center
  }
  .houses-slice__slider-left h3{
    color: #006c5b;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6vw;
    margin-bottom: 10px;
    font-weight: 400;
  }

  .houses-slice__measures{
    list-style-type: disc;
  }
  .houses-slice__measures li{
    list-style: none;
    padding-left: 0px;
    font-size: 18px;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    color: #092e29;
    font-weight: 200;
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
  }
  .houses-slice__characteristics p{
    font-family: 'Roboto', sans-serif;
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
    font-weight: 200;
    color: #092e29;
  }
  .houses-slice__characteristics li::before{
    content: "";
    position: relative;
    display: block;
    width: 6px;
    height: 6px;
    background-color: #949769;
    margin-right: 8px;
    margin-top: 11px;
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
    width: 60%;
    position: relative;
    display: flex;
    flex-direction: column;
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
</style>