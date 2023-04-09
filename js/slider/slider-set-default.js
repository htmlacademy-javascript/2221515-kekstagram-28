import { updateSlider } from './slider-update.js';
import { EFFECT_DEFAULT } from '../constants.js';
import { chosenEffect } from './effects-change.js';

const isDefault = () => chosenEffect === EFFECT_DEFAULT;
const resetEffects = () => {
  updateSlider();
};

export { isDefault, resetEffects };
