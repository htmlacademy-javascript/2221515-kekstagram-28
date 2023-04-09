import { scaleImage } from './scale-image.js';
import {
  SCALE_STEP,
  SCALE_MIN,
} from '../constants.js';

const scaleControlValue = document.querySelector('.scale__control--value');

const onSmallerControlClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  scaleImage(newValue);
};

export { onSmallerControlClick };
