const uploadImage = document.querySelector('.img-upload__preview img');
const scaleControlValue = document.querySelector('.scale__control--value');

const scaleImage = (value) => {
  uploadImage.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

export { scaleImage };
