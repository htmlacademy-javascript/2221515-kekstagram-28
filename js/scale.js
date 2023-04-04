const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  uploadImage.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${SCALE_DEFAULT}%`;
};

const onSmallerControlClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  scaleImage(newValue);
};

const onBiggerControlClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(SCALE_DEFAULT);

scaleControlSmaller.addEventListener('click', onSmallerControlClick);
scaleControlBigger.addEventListener('click', onBiggerControlClick);

export { resetScale };
