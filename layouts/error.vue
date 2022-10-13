<template>
  <div
    v-if="error.statusCode === 404"
    class="pt-60"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <AppSectionTitle
            title="Page not found"
            subtitle="Sorry, but the page you were looking for could not be found."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
