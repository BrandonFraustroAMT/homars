<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.GalerySlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
const currentIndex = ref(0);
const setCurrentIndex = (index: number) => {
    currentIndex.value = index;
  };
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="sectionGallery"
  >
    <div class="gallery-slice__container gallery-slice__content">
      <div class="gallery-slice__row">
        <div class="gallery-slice__col-text" >
          <div class="gallery-slice__selector">
            <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
            <div class="gallery-slice__content-selector">
              <template v-for="(item,index) in slice.primary.groupgalery" :key="index">
                <div class="gallery-slice__selector-text" @click="setCurrentIndex(index)">
                  {{ item.date }}
                </div>
                <div class="gallery-slice__line"></div>
              </template>
            </div>
          </div>
        </div>
        <div class="gallery-slice__col-image" >
          <template v-for="(item,index) in slice.primary.groupgalery" :key="index">
            <div class="gallery-slice__image-content" v-show="currentIndex === index">
              <div class="gallery-slice__two-image" >
                <div>
                  <PrismicImage :field="item.image1" />
                </div>
                <div>
                  <PrismicImage :field="item.image2" />
                </div>
              </div>
              <div class="gallery-slice__big-image" >
                <PrismicImage :field="item.image3" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- 
  

-->

<style>
  .sectionGallery{
    background-color: #3c3933;
    width: 100%;
    padding: 8% 10% 20px;
  }

  .gallery-slice__container{
    width: 100%;
    margin: 0 auto
  }

  .gallery-slice__content{
    max-width: 1648px;
    padding: 0 24px;
  }

  .gallery-slice__container::before{
    content: "";
    display: table;
  }
  .gallery-slice__row{
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-direction: row;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -.5);
    margin-left: calc(var(--bs-gutter-x) * -.5);
  }
  
  .gallery-slice__container::after{
    clear: both;
  }
  .gallery-slice__col-text{
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
  }
  .gallery-slice__selector{
    padding: 62px 0 0;
    max-width: 160px;
  }
  .gallery-slice__selector h2{
    font-size: 2.8vw;;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 400;
    margin-bottom: 20px;
    color: #fff
  }

  .gallery-slice__selector-text{
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    width: 100%;
    padding: 7px;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 100px;
    background-color: transparent;
  }
  .gallery-slice__selector-text:hover{
    color: #fff;
    background-color: #595959;
  }
  .gallery-slice__line{
    display: block;
    width: 1px;
    height: 40px;
    margin: 0 auto;
    background-color: #fff;
  }
  .gallery-slice__image-content{
    display: flex;
    justify-content: space-between;
  }
  .gallery-slice__two-image{
    width: Calc(33.333% - 16px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .gallery-slice__two-image > div img{
    width: 100%;
    display: block;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
  .gallery-slice__big-image{
    width: Calc(66.666% - 16px);
  }
  .gallery-slice__big-image img{
    width: 100%;
  }

  @media (min-width: 768px) {
    .gallery-slice__col-text{
      flex: 0 0 auto;
      width: 23.66666667%;
    }
    .gallery-slice__col-image{
      flex: 0 0 auto;
      width: 81.33333333%;
    }
  }

</style>
