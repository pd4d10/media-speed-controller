;({
  videos: [].map.call(
    document.querySelectorAll('video'),
    video => video.playbackRate
  ),
  audios: [].map.call(
    document.querySelectorAll('audio'),
    audio => audio.playbackRate
  ),
})
