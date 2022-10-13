<template>
  <div class="flex justify-center items-center">
    <Lottie
      :options="defaultOptions"
      :height="height"
      :width="width"
    />

    <slot />
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/assets/lotties/loader'

export default {
  components: { Lottie },

  props: {
    width: {
      type: Number,
      default: 150,
    },

    height: {
      type: Number,
      default: 150,
    },
  },

  data () {
    return {
      defaultOptions: { animationData: animationData.default },
    }
  },
}
</script>
