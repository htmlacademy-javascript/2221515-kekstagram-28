import { EFFECTS, EFFECT_DEFAULT } from '../constants.js';
import { updateSlider } from './slider-update.js';

const imageElement = document.querySelector('.img-upload__preview img');
let chosenEffect = EFFECT_DEFAULT;

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {

    return;
  }
  chosenEffect = EFFECTS[evt.target.value];
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

export { onEffectsChange, chosenEffect };
