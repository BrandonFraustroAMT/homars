<script setup lang="ts">
import { PrismicLink, PrismicImage, PrismicRichText } from '@prismicio/vue';
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeaderSlice>([
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
    id="header-section"
  >
    <div class="header-container">
      <div class="header-slice__data">
        <div class="header-slice__logo">
          <PrismicLink :field="slice.primary.linklogo" class="header-slice__logo-link">
            <PrismicImage :field="slice.primary.logo" />
          </PrismicLink>
        </div>
        <div class="header-slice__schedule">
          <PrismicLink :field="slice.primary.linkschedulecall" class="header-slice__schedule-button">
            {{ slice.primary.labelschedulecall }}
          </PrismicLink>
        </div>
        <h1 class="header-slice__tittle"><PrismicRichText :field="slice.primary.tittle"/></h1>
        <div class="header-slice__subtittle">
          <p>
            {{ slice.primary.subtittle }}
          </p>
        </div>
        <h3 class="header-slice__description">{{ slice.primary.description }}</h3>

        <PrismicLink :field="slice.primary.linkmoreinfo" class="header-slice__link-moreinfo">
          <p class="header-slice__moreinfo-box">
            {{ slice.primary.labelmoreinfo }}
          </p>
        </PrismicLink>
      </div>

      <div class="header-slice__background">
        <PrismicImage :field="slice.primary.backgroundimage" />
      </div>
      
      <div class="header-slice__whats">
        <PrismicLink :field="slice.primary.linkwhatsapp"><PrismicImage :field="slice.primary.iconwhatsapp" class="header-slice__whats-image"/></PrismicLink>
      </div>
    </div>
  </section>
</template>

<style>
  /* #header-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 0px;
    background-color: #0c202f;
    color: var(--white);
    position: relative;
    z-index: 0;
  } */

  .header-container{
    width: 100%;
    height: 102vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-slice__data{
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 5%;
    width: 100%;
  }

  .header-slice__logo{
    width: auto;
    display: block;
    margin: auto 0;
    padding: 0px 0px 0px;
  }
  .header-slice__logo .header-slice__logo-link{
    display: block;
    width: auto;
    height: auto;
    background-color: transparent;
    border: 0px;
  }

  .header-slice__schedule{
    position: absolute;
    top: 30px;
    right: 50px;
  }

  .header-slice__schedule-button{
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 10px;
    color: var(--white);
    font-size: 15px;
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }
  .header-slice__schedule-button:hover{
    border: 2px solid var(--white);
  }

  .header-slice__tittle{
    margin-top: 2%;
    color: var(--white);
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    line-height: 1;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
  .header-slice__subtittle{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 0px !important;
    padding: 10px 0;
  }
  .header-slice__subtittle p{
    color: var(--white);
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
  }
  .header-slice__description{
    color: var(--white);
    font-size: 1.5rem;
    line-height: 1;
    font-weight: normal;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);
  }
  .header-slice__link-moreinfo{
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
  .header-slice__link-moreinfo::before{
    content: "";
    position: absolute;
    left: 7px;
    top: 7px;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border: 1px solid #5f7d78;
    border-radius: 5px;
  }
  .header-slice__link-moreinfo:hover{
    letter-spacing: 2px;
    cursor: pointer;
  }
  .header-slice__background{
    width: 100%;
  }
  .header-slice__whats{
    position: fixed;
    bottom: 5vh;
    right: 3vw;
    width: 60px;
    height: 60px;
    z-index: 2;
  }
  .header-slice__whats-image{
    border-radius: 50%;
  }

  @media (min-width: 640px) {
    .header-slice__background{
      /* display: block;
      position: relative;
      z-index: 1;
      margin-top: -22.5rem;
      width: 100%; */
    }
  }

  @media (min-width: 1024px) {
    .header-slice__background{
      position: relative;
      z-index: 1;
      margin-top: -23rem;
      width: 100%;
    }
  }
  @media (min-width: 1440px) {
    .header-slice__background{
      position: relative;
      z-index: 1;
      margin-top: -24rem;
      width: 100%;
    }
  }

</style>

