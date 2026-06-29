// Inputs
const audioInput = document.querySelector('#audio-file');

// Information
const fileName = document.querySelector('#file-name');
const currentTime = document.querySelector('#current-time');
const totalTime = document.querySelector('#total-time');

// Controls
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const progressBar = document.querySelector('#progress-bar');

// Audio Player
const audio = new Audio();


// ==========================
// Select Audio File
// ==========================

audioInput.addEventListener('change', () => {

    const file = audioInput.files[0];

    if (!file) return;

    fileName.textContent = file.name;

    audio.src = URL.createObjectURL(file);

});


// ==========================
// Audio Metadata
// ==========================

audio.addEventListener('loadedmetadata', () => {

    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);

    const formattedSeconds = String(seconds).padStart(2, '0');

    totalTime.textContent = `${minutes}:${formattedSeconds}`;

});


// ==========================
// Audio Progress
// ==========================

audio.addEventListener('timeupdate', () => {

    // Current Time

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);

    const formattedSeconds = String(seconds).padStart(2, '0');

    currentTime.textContent = `${minutes}:${formattedSeconds}`;

    // Progress Bar

    const progress =
        (audio.currentTime / audio.duration) * 100;

    progressBar.value = progress;

});


// ==========================
// Controls
// ==========================

playButton.addEventListener('click', () => {

    audio.play();

});

pauseButton.addEventListener('click', () => {

    audio.pause();

});