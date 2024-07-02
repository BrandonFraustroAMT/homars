<script setup lang="ts">
import { type Content } from "@prismicio/client";

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
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="sectionLots"
  >
    <div class="lots-slice__column1 title-lots" >
      <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
    </div>
    <div class="lots-slice__column2" >
      <div class="lots-slice__left-column">
        <PrismicImage :field="slice.primary.imagelots" />
      </div>
      <div class="lots-slice__right-column">
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
    padding: 7% 5% 10% 0%;
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
    font-family: 'Roboto', sans-serif;
    color: #949769;
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
  .lots-slice__column2{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .lots-slice__left-column{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .lots-slice__right-column{
    padding-left: 5%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .lots-slice__richText p{
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.7;
    font-family: 'Roboto', sans-serif;
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
    flex-direction: row;
    align-items: center;
    line-height: 1.2;
    width: 100%;
  }
  .lots-slice__gallery li:first-child{
    border-top: 1px solid #d5d0c9;
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
    line-height: 1.7;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    color: #092e29;
    font-size: 18px;
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
</style>