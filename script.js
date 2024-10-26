// JavaScript for controlling multimedia playback

// Audio Variables
var audio = document.getElementById("myAudio");

// Video Variables
var video = document.getElementById("myVideo");

// Functions for controlling audio playback
function playAudio() {
    if (audio.play) {
        audio.play();
    }
}

function pauseAudio() {
    if (!audio.paused) {
        audio.pause();
    }
}

// Functions for controlling video playback
function playVideo() {
    if (video.play) {
        video.play();
    }
}

function pauseVideo() {
    if (!video.paused) {
        video.pause();
    }
}
