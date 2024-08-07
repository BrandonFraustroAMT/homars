// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  amenities: defineAsyncComponent(() => import("./Amenities/index.vue")),
  concept: defineAsyncComponent(() => import("./Concept/index.vue")),
  contact: defineAsyncComponent(() => import("./Contact/index.vue")),
  diferentiators: defineAsyncComponent(
    () => import("./Diferentiators/index.vue"),
  ),
  galery: defineAsyncComponent(() => import("./Galery/index.vue")),
  header: defineAsyncComponent(() => import("./Header/index.vue")),
  houses: defineAsyncComponent(() => import("./Houses/index.vue")),
  image_separator: defineAsyncComponent(
    () => import("./ImageSeparator/index.vue"),
  ),
  lots: defineAsyncComponent(() => import("./Lots/index.vue")),
  navigation: defineAsyncComponent(() => import("./Navigation/index.vue")),
  separator: defineAsyncComponent(() => import("./Separator/index.vue")),
  ubication: defineAsyncComponent(() => import("./Ubication/index.vue")),
  video: defineAsyncComponent(() => import("./Video/index.vue")),
});
