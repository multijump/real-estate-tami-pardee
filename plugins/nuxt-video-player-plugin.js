import Vue from 'vue'
import videojs from 'video.js'
window.videojs = videojs

// No need to require videojs-contrib-hls as videojs v7 already support hls streaming

const VueVideoPlayer = require('vue-video-player/dist/vue-video-player')
Vue.use(VueVideoPlayer)
