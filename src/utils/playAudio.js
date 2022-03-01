function playAudio(name) {
  const audio = new Audio(`/data/audios/${name}.mp3`);
  audio.play();
}

export default playAudio;
