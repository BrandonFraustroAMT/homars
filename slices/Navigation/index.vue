<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref } from 'vue';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.NavigationSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// State for mobile menu visibility
const showMobileMenu = ref(false);

// Method to toggle mobile menu visibility
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="navigation-slice"
  >
  <div class="menu">
      <div class="menu-hero__nav">
        <div class="menu-hero__logo">
          <PrismicLink :field="slice.primary.linklogo"><PrismicImage :field="slice.primary.imagelogo" /></PrismicLink>
        </div>
        <div class="menu-hero__container" :class="{ 'open-menu': showMobileMenu }">
          <div class="menu-hero__section">
            <template v-for="item in slice.primary.groupsection">
              <div class="menu-hero__section-label">
                <PrismicLink :field="item.linklabel" class="menu-hero__section-link">{{ item.label }}</PrismicLink>
              </div>
            </template>
          </div>
          <div id="menu-hero__btn">
            <PrismicLink :field="slice.primary.linkbutton" class="menu-hero__btn-link">{{ slice.primary.labelbutton }}</PrismicLink>
          </div>
          <i class="menu-hero__icono" @click="toggleMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E9EAED">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </i>
        </div>
        <i class="menu-hero__icono" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </i>
      </div>
    </div>
  </section>
</template>

<style>
  .navigation-slice{
    position: sticky;
    top: 0px;
    z-index: 1;
  }
  .menu {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 2rem;
    padding-left: 2rem;
    width: 100%;
    color: var(--black);
    border-bottom: 1px solid #505050;
    background-color: var(--white);
    z-index: 2;
  }
  .menu-hero__logo {
    width: 45px;
    z-index: 0;
  }
  .logo {
    font-size: 15px;
  }

  .menu-hero__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    position: relative;
    overflow: auto;
    flex-grow: 1;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    background-color: var(--white);
  }
  .menu-hero__container.open-menu {
    transform: translateX(0);
  }

  .menu-hero__nav {
    font-family: 'Clash', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 20px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .menu-hero__section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .menu-hero__section-label{
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #505050;
  }

  .menu-hero__section-link{
    text-decoration: none;
    color: var(--black);
    font-size: 15px;
  }

  /* Estilos boton */
  #menu-hero__btn {
    padding: 10px 25px;
    border-radius: 10px;
    background-color: var(--greenButton);
  }
  #menu-hero__btn:hover {
    background-color: var(--buttonHover);
    cursor: pointer;
  }
  .menu-hero__btn-link{
    text-decoration: none;
    color: var(--white);
    font-size: 15px;
  }
  i.menu-hero__icono{
    display: block;
    padding: 0 1rem;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    .menu-hero__container {
      position: absolute;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      transform: translateX(100%);
    }
    .menu-hero__container.open-menu {
      transform: translateX(0);
    }
    #menu-hero__btn {
      display: block;
      margin: 1rem 0;
    }
    .menu-hero__section {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      padding-bottom: 20px
    }
    .menu-hero__section-link {
      font-size: 15px;
    }
    .menu-hero__btn-link {
      font-size: 15px;
    }
  }

  @media (min-width: 1025px) {
    .menu {
        padding-top: 10px 0
    }

    .menu-hero__nav {
      max-width: 1024px;
      padding-right: 2rem;
      padding-left: 2rem;
    }
    .menu-hero__logo{
      padding-right: 4rem;
      width: 12%;
    }
    .logo{
      padding-top: 34px;
      padding-bottom: 34px;
    }
    .menu-hero__container{
      font-size: 0.875rem;
      line-height: 1.142;
      padding: 0;
      border-style: none;
      align-items: center;
      display: flex;
      flex-direction: row;
      width: auto;
      margin-right: 0;
      position: static;
      transform: none;
    }
    .menu-hero__section{
      display: flex;
      flex-direction: row;
      padding-right: 100px;
      justify-content: space-around;
    }
    .menu-hero__section-label {
      justify-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom: none;
    }
    #menu-hero__btn {
      display: block;
      width: 190px;
    }
    i.menu-hero__icono {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    .menu-hero__nav{
      max-width: 1280px;
    }
    .menu-hero__container{
      font-size: 1rem;
      line-height: 1.5;
    }
  }
  @media (min-width: 1400px) {
    .menu-hero__nav{
      max-width: 1440px;
      padding: 0px 5rem;
    }
  }
  @media (min-width: 1600px) {
    .menu-hero__nav{
      max-width: 1600px;
      padding: 0px 5rem;
    }
  }
  @media (min-width: 1800px) {
    .menu-hero__nav{
      max-width: 1800px;
      padding: 0px 5rem;
    }
  }
  @media (min-width: 2160px) {
    .menu-hero__nav{
      max-width: 2160px;
      padding: 0px 5rem;
    }
  }
</style>