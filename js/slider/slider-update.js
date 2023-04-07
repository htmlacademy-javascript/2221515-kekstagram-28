import { EFFECT_DEFAULT } from '../constants.js';
import { isDefault } from './slider-set-default.js';
import { hideSlider } from './close-slider.js';
import { showSlider } from './open-slider.js';
import { chosenEffect } from './effects-change.js';

const sliderElement = document.querySelector('.effect-level__slider');
const imageElement = document.querySelector('.img-upload__preview img');
const effectsLevel = document.querySelector('.effect-level__value');

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  if (isDefault()) {
    imageElement.style.filter = EFFECT_DEFAULT.style;

    return;
  }
  imageElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectsLevel.value = sliderValue;
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    hideSlider();

    return;
  }

  showSlider();
};

export { updateSlider, onSliderUpdate };
