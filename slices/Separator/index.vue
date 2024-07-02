<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SeparatorSlice>([
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
    class="separator"
  >
    <div class="separator-column" >
      <PrismicImage :field="slice.primary.imageseparator" />
    </div>
  </section>
</template>

<style>
  .separator{
    background-color: #3d3835;
    width: 100%;
    overflow: hidden;
  }
  .separator-column{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .separator-column img{
    width: 100%;
    height: auto;
  }
</style>