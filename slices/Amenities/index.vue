<script setup lang="ts">
import { type Content } from "@prismicio/client";

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
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="sectionAmenities"
  >
    <div class="amenities-slice__column amenities-slice__title" >
      <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
    </div>
    <div class="amenities-slice__column amenities-slice__list amenities-slice__max1400" >
      <template v-for="item in slice.primary.groupamenities">
        <div class="amenities-slice__amenitie">
          <PrismicImage :field="item.icon" />
          <h3>{{ item.label }}</h3>
        </div>
      </template>
    </div>
    <div class="amenities-slice__column amenities-slice__big amenities-slice__max1400" >
      <div class="amenities-slice__big-title amenities-slice__max1200">
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
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 400;
    color: #949769;
    margin-bottom: 10px;
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
    width: 33.33%;
  }
  .amenities-slice__amenitie img{
    width: 100%;
    height: auto;
    max-width: 140px;
  }
  .amenities-slice__amenitie h3{
    font-size: 0.9vw;
    text-align: center;
    margin-top: 20px;
    color: #949769;
    font-family: 'Roboto', sans-serif;
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
    font-size: 120px;
    font-family: 'Roboto', sans-serif;
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
</style>