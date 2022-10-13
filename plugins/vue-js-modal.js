import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'

import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, {
  dynamicDefaults: {
    width: '80%',
    height: 'auto',
    adaptive: true,
    shiftY: 0.75,
    styles: 'z-index: 100000;'
  }
})
