document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("myAudio");
  document.addEventListener("click", function enableAudio() {
    audio.play().catch((error) => {
      console.log(
        "Reproducción automática bloqueada. Esperando interacción del usuario."
      );
      console.log(error);
    });
    document.removeEventListener("click", enableAudio);
  });

  const playPauseBtn = document.getElementById("playPauseBtn");
  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseBtn.classList.remove("pause");
      playPauseBtn.classList.add("play");
    } else {
      audio.pause();
      playPauseBtn.classList.remove("play");
      playPauseBtn.classList.add("pause");
    }
  });
});
