import { scaleImage } from './scale-image.js';
import {
  SCALE_STEP,
  SCALE_MAX,
} from '../constants.js';

const scaleControlValue = document.querySelector('.scale__control--value');

const onBiggerControlClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  scaleImage(newValue);
};

export { onBiggerControlClick };
