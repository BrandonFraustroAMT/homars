<script setup lang="ts">
import { type Content } from "@prismicio/client";

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
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="diferentiators-slice"
  >
    <div class="diferentiators-slice__column1 tittle-diferentiator" >
      <PrismicRichText :field="slice.primary.tittle" class="diferentiators-slice__title"/>
    </div>
    <div class="diferentiators-slice__column1 list-diferentiator max1400-diferentiator" >
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
    font-size: 1.6vw;
    font-family: 'Roboto', sans-serif;
    color: var(--greenStrongText);
    margin-bottom: 10px;
    letter-spacing: 0.2rem;
    font-weight: 200;
  }
  .list-diferentiator{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .max1400-diferentiator{
    max-width: 1400px
  }
  .diferentiator{
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 25%;
  }
  .diferentiator img {
    width: 100%;
    height: auto;
    max-width: 140px;
  }
  .diferentiator h3 {
    font-size: 0.9vw;
    text-align: center;
    margin-top: 20px;
    color: var(--greenStrongText);
    font-weight: 400;
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
</style>