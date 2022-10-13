<template>
  <div class="AppMap">
    <div
      ref="map"
      :style="`height: ${height}px; width: ${width}px;`"
    />
  </div>
</template>

<script>
export default {
  props: {
    map: {
      type: Object,
      default: () => {},
    },

    height: {
      type: Number,
      default: 280,
    },

    width: {
      type: Number,
      default: 280,
    }
  },

  head () {
    return {
      script: [{
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4ARSwu-AOLCGSKFi5AaqYhb5isnINxk0',
        hid: 'map',
        defer: true,
      }]
    }
  },

  mounted () {
    const mapOptions = {
      zoom: this.map.zoom ? this.map.zoom : 15,
      center: new window.google.maps.LatLng(this.map.lat, this.map.lng),
      disableDefaultUI: true,
      zoomControl: true
    }

    const map = new window.google.maps.Map(this.$refs.map, mapOptions)
    const position = new window.google.maps.LatLng(this.map.lat, this.map.lng)
    const marker = new window.google.maps.Marker({ position })

    marker.setMap(map)
  },
}
</script>

<style lang="scss" scoped>
  .AppMap {
    &__img {
      max-width: 280px;
      max-height: 280px;
    }
  }
</style>
