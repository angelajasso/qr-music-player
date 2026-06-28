const audioInput = document.querySelector('#audio-file');
const fileName = document.querySelector('#file-name');
const duration = document.querySelector('#audio-duration');
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');

const audio = new Audio();

audioInput.addEventListener('change', () => {

    const file = audioInput.files[0];

    if (file) {

        fileName.textContent = file.name;

        audio.src = URL.createObjectURL(file);

        audio.addEventListener('loadedmetadata', () => {

            const minutes = Math.floor(audio.duration / 60);
            const seconds = Math.floor(audio.duration % 60);

            const formattedSeconds = String(seconds).padStart(2, '0');

            duration.textContent = `Duration: ${minutes}:${formattedSeconds}`;

        });

    }

});

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});