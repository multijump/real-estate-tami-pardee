<template>
  <div class="AppVideoModaL">
    <div class="AppVideoModal__header">
      <div
        class="AppVideoModal__close"
        @click.prevent="closeModal()"
      >
        <font-awesome-icon
          class="AppVideoModal__close-icon"
          :icon="['fas', 'times']"
        />
      </div>
    </div>

    <ClientOnly>
      <youtube
        :video-id="id"
        player-width="100%"
        :player-vars="{autoplay: 1}"
        :width="width"
        :height="height"
      />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '320px',
    },
  },

  methods: {
    closeModal () {
      this.$modal.hideAll()
    },
  },
}
</script>

<style lang="scss" scoped>
  .AppVideoModal {
    &__header {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &__close {
      height: 40px;
      width: 40px;
      background: #f5f5f5;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
