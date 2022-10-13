<template>
  <section class="ListingBackToSearch d-block d-md-none">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <AppLink
            text="Back to Search Results"
            color="grey"
            navigate-to="/search-home"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingBackToSearch {
    position: relative;
    padding: 30px 0;
  }
</style>
