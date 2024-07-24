<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted, defineComponent } from "vue";
import LeafletMap from '@/components/LeafletMap.vue';

const zoom = ref(6)
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.UbicationSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);


/// Refs para los elementos a animar
const triggerUbicationText = ref<HTMLElement | null>(null);
const triggerUbicationMap = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const { default: ScrollMagic } = await import('scrollmagic');

    const controller = new ScrollMagic.Controller();
    
    /* Tittle */
    new ScrollMagic.Scene({
      triggerElement: triggerUbicationText.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerUbicationText.value, "visible") // add class to reveal
    .addTo(controller);

    /* Text */
    new ScrollMagic.Scene({
      triggerElement: triggerUbicationMap.value,
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle(triggerUbicationMap.value, "visible") // add class to reveal
    .addTo(controller);
  }
});

defineComponent({
  components: {
    LeafletMap
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="ubication-slice"
  >
    <div class="ubication-slice__column" >
      <div id="triggerUbicationText" class="ubication-slice__left"  ref="triggerUbicationText">
        <div class="ubication-slice__title" >
          <h2>
            <PrismicRichText :field="slice.primary.tittle" />
          </h2>
        </div>
        <div class="ubication-slice__richText" >
          <p>
            {{ slice.primary.subtittle }}
          </p>
        </div>
        <div class="ubication-slice__ubications-list" >
          <div class="ubication-slice__block-top" >
            <h4>{{ slice.primary.listone }}</h4>
            <div class="ubication-slice__block-list">
              <template v-for="item in slice.primary.grouplistone">
                <div class="ubication-slice__list-data">
                  {{ item.label }}
                </div>
              </template>
            </div>

            <h4>{{ slice.primary.listtwo }}</h4>
            <div class="ubication-slice__block-list">
              <template v-for="item in slice.primary.grouplisttwo">
                <div class="ubication-slice__list-data">
                  {{ item.label }}
                </div>
              </template>
            </div>
            <h4>{{ slice.primary.listthree }}</h4>
            <div class="ubication-slice__block-list">
              <template v-for="item in slice.primary.grouplistthree">
                <div class="ubication-slice__list-data">
                  {{ item.label }}
                </div>
              </template>
            </div>
          </div>
          <div class="ubication-slice__block-top" >
            <h4>{{ slice.primary.listfour }}</h4>
            <div class="ubication-slice__block-list">
              <template v-for="item in slice.primary.grouplistfour">
                <div class="ubication-slice__list-data">
                  {{ item.label }}
                </div>
              </template>
            </div>
            <h4>{{ slice.primary.listfive }}</h4>
            <div class="ubication-slice__block-list">
              <template v-for="item in slice.primary.grouplistfive">
                <div class="ubication-slice__list-data">
                  {{ item.label }}
                </div>
              </template>
            </div>
            <h4>{{ slice.primary.listsix }}</h4>
            <div class="ubication-slice__block-list">
              <template v-for="item in slice.primary.grouplistsix">
                <div class="ubication-slice__list-data">
                  {{ item.label }}
                </div>
              </template>
            </div>
            <h4>{{ slice.primary.listseven }}</h4>
            <div class="ubication-slice__block-list">
              <template v-for="item in slice.primary.grouplistseven">
                <div class="ubication-slice__list-data">
                  {{ item.label }}
                </div>
              </template>
            </div>
          </div>
        </div>
        <PrismicLink :field="slice.primary.linkbutton" class="ubication-slice__btn ubication-slice__agendarbtn">
          {{ slice.primary.labelbutton }}
        </PrismicLink>
      </div>
      <div id="triggerUbicationMap" class="ubication-slice__right" ref="triggerUbicationMap">
        <div class="ubication-slice__map" >
          <!-- imagen mapa -->
            <LMap
              ref="map"
              :zoom="zoom"
              :center="[20.159098, -98.964844]"
              :use-global-leaflet="false"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base"
                name="OpenStreetMap"
              />
              <LMarker :lat-lng="[20.159098, -98.964844]">
                <LPopup> Homars! </LPopup>
              </LMarker>
            </LMap>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .ubication-slice{
    position: relative;
    background-color: var(--greenBackground);
    padding: 5% 5% 10%;
    margin-top: -5px;
  }
  .ubication-slice__column{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ubication-slice__left{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #triggerUbicationText{
    opacity: 0;
    transform: translateX(-60px);
    transition: all 1s ease-in-out;
  }
  #triggerUbicationText.visible{
    opacity: 1;
    transform: none;
  }

  .ubication-slice .ubication-slice__left{
    width: 90%;
    align-items: center;
  }
  .ubication-slice__title h2{
    color: var(--greenStrongText);
    font-size: 3rem;
    font-family: 'Mirage Bold';
    font-weight: 200;
    letter-spacing: 0.2rem;
    margin-bottom: 10px;
  }
  .ubication-slice__richText{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    color: var(--greenStrongText);
    margin-bottom: 30px;
  }
  .ubication-slice__richText p{
    margin-bottom: 10px;
    font-size: 1.2rem;
    line-height: 1.7;
    font-family: 'Mirage Regular';
  }
  .ubication-slice__ubications-list{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    color: var(--greenStrongText);
    margin-bottom: 20px;
  }
  .ubication-slice__block-top{
    width: 50%;
    padding: 0;
    margin: 0;
  }
  .ubication-slice__block-top h4{
    margin-top: 0px;
    font-size: 1rem;
    font-family: 'Mirage Medium';
    color: #535524;
    margin-bottom: 0;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
  .ubication-slice__block-list{
    padding-left: 28px;
    margin-bottom: 20px;
    margin-top: 5px;
  }
  .ubication-slice__list-data{
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.4;
    color: var(--greenStrongText);
  }
  .ubication-slice__btn{
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
  .ubication-slice__btn::before{
    content: "";
    position: absolute;
    left: 7px;
    top: 7px;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border: 1px solid #5f7d78;
    border-radius: 5px;
  }
  .ubication-slice__btn:hover{
    letter-spacing: 2px;
    cursor: pointer;
  }
  .ubication-slice__right{
    width: 80%;
    padding: 15% 0% 0% 10%;
  }
  #triggerUbicationMap{
    opacity: 0;
    transform: translateX(60px);
    transition: all 1s ease-in-out;
  }
  #triggerUbicationMap.visible{
    opacity: 1;
    transform: none;
  }
  .ubication-slice__map{
    width: 100%;
    height: 400px;
  }
  .leaflet-container {
    z-index: 1;
  }
  .ubication-slice__pin{
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: #0d3c35;
    border-radius: 60px;
    top: calc(51% - 30px);
    left: calc(45% - 30px);
    padding: 1px;
    z-index: 0;
  }
  .ubication-slice__pin::before{
    content: "";
    width: 110%;
    height: 110%;
    background-color: #0d3c35;
    position: absolute;
    top: -5%;
    left: -5%;
    z-index: -1;
    border-radius: 100px;
    animation-name: pinScala;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    opacity: 1;
  }

  @keyframes pinScala {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.2)
    }
    0% {
      transform: scale(1)
    }
  }

  .ubication-slice__tooltip{
    font-size: 15px;
    line-height: 1.2;
    text-align: center;
    position: absolute;
    width: 140px;
    height: auto;
    background-color: #3d3835;
    color: #fff;
    padding: 8px;
    border-radius: 10px;
    top: calc(51% - 86px);
    left: calc(45% - 70px);
    z-index: 2;
    display: none;
  }
  .ubication-slice__tooltip::before{
    content: "";
    position: absolute;
    background-color: #3d3835;
    width: 20px;
    height: 14px;
    bottom: -12px;
    left: 60px;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    z-index: 1;
  }

  @media (min-width: 1100px) {
    .ubication-slice__column{
      flex-direction: row;
      align-items: stretch;
    }
    .ubication-slice__left{
      width: 50%;
    }
    .ubication-slice .ubication-slice__left{
      width: 50%;
      align-items: flex-start;
    }
    .ubication-slice__title h2{
      font-size: 2.6vw;
    }
    .ubication-slice__richText p{
      font-size: 1.1vw;
    }
    .ubication-slice__block-top h4{
      font-size: 1.2vw;
    }
    .ubication-slice__list-data{
      font-size: 0.9vw;
    }
    .ubication-slice__right{
      width: 50%;
      padding: 0% 0% 0% 10%;
    }
  }
</style>
