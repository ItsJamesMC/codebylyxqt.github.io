const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

audioPlayer.addEventListener("play", function () {
    playBtn.style.display = "none";  
    pauseBtn.style.display = "inline-block";  
});

audioPlayer.addEventListener("pause", function () {
    playBtn.style.display = "inline-block";  
    pauseBtn.style.display = "none";  
});


playBtn.addEventListener("click", togglePlay);
pauseBtn.addEventListener("click", togglePlay);

function setVolume() {
    const volumeControl = document.getElementById("volumeControl");
    audioPlayer.volume = volumeControl.value;
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "/";
    }
}

