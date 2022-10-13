import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC4ARSwu-AOLCGSKFi5AaqYhb5isnINxk0',
    libraries: 'places',
  },
})
