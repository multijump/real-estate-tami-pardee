<template>
  <section class="HomePromo">
    <CommunityPromoSlider
      v-if="Array.isArray(community.slides)"
      :list="community.slides"
      :type="community.slider_type"
      :pretitle="community.pretitle"
      :title="community.title"
    />
  </section>
</template>

<script>
export default {
  props: {
    community: {
      type: [Array, Object],
      default: () => null,
    },
  },
}
</script>
