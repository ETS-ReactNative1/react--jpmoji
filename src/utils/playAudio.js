function playAudio(name) {
  const audio = new Audio(`/data/audios/${name}.mp3`);
  audio.play();
}

function playAudioWave(name) {
  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    progressColor: '#6875f5',
    barWidth: 1,
    barRadius: 1,
    barHeight: 1,
    barGap: 2,
    height: 20,
    width: 20,
    loopSelection: false,
    responsive: true,
  });

  wavesurfer.load(`/data/audios/${name}.mp3`);

  wavesurfer.on('ready', function () {
    wavesurfer.play();
  });

  wavesurfer.on('finish', function () {
    wavesurfer.destroy();
  });
}

export { playAudio, playAudioWave };
