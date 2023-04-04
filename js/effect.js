const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brighthess',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const EFFECT_DEFAULT = EFFECTS[0];

const imageElement = document.querySelector('.img-upload__preview img');
const uploadImageEffects = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderLevelContainer = document.querySelector('.img-upload__overlay');
const effectsLevel = document.querySelector('.effect-level__value');
let chosenEffect = EFFECT_DEFAULT;

const isDefault = () => chosenEffect === EFFECT_DEFAULT;

const showSlider = () => {
  sliderLevelContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderLevelContainer.classList.add('hidden');
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

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {

    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  if (isDefault()) {
    imageElement.style.filter = EFFECT_DEFAULT.style;

    return;
  }
  imageElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectsLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = EFFECT_DEFAULT;
  updateSlider();
};

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

export { resetEffects };
