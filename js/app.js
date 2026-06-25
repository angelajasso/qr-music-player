const audioInput = document.querySelector('#audio-file');
const fileName = document.querySelector('#file-name');

audioInput.addEventListener('change', () => {
  const file = audioInput.files[0];

  if (file) {
  fileName.textContent = file.name;
  }
});