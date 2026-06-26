const audioInput = document.querySelector('#audio-file');
const fileName = document.querySelector('#file-name');
const playButton = document.querySelector('#play-button');

const audio = new Audio();

audioInput.addEventListener('change', () => {

    const file = audioInput.files[0];

    if (file) {
        fileName.textContent = file.name;
        audio.src = URL.createObjectURL(file);
    }

});

playButton.addEventListener('click', () => {
    audio.play();
});