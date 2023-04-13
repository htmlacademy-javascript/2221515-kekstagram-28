import { FILE_TYPES } from './constants.js';

const uploadFileElement = document.querySelector('.img-upload__input[type=file]');
const imgDefaultElement = document.querySelector('.img-upload__preview img');

uploadFileElement.addEventListener('change', () => {
  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgDefaultElement.src = URL.createObjectURL(file);
  }
});
