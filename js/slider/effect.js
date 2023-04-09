import { EFFECT_DEFAULT } from '../constants.js';
import { hideSlider } from './close-slider.js';
import { onEffectsChange } from './effects-change.js';
import { onSliderUpdate } from './slider-update.js';

const uploadImageEffects = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECT_DEFAULT.min,
    max: EFFECT_DEFAULT.max,
  },
  start: EFFECT_DEFAULT.max,
  step: EFFECT_DEFAULT.step,
  connect: 'lower',
});
hideSlider();

uploadImageEffects.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);
