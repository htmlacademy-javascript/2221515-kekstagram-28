const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;
// const EFFECTS = [
//   {
//     name: 'none',
//     style: 'none',
//     min: 0,
//     max: 100,
//     step: 1,
//     unit: '',
//   },
//   {
//     name: 'chrome',
//     style: 'grayscale',
//     min: 0,
//     max: 1,
//     step: 0.1,
//     unit: '',
//   },
//   {
//     name: 'sepia',
//     style: 'sepia',
//     min: 0,
//     max: 1,
//     step: 0.1,
//     unit: ''
//   },
//   {
//     name: 'marvin',
//     style: 'invert',
//     min: 0,
//     max: 100,
//     step: 1,
//     unit: '%',
//   },
//   {
//     name: 'phobos',
//     style: 'blur',
//     min: 0,
//     max: 3,
//     step: 0.1,
//     unit: 'px',
//   },
//   {
//     name: 'heat',
//     style: 'brighthess',
//     min: 1,
//     max: 3,
//     step: 0.1,
//     unit: '',
//   },
// ];
const EFFECTS = {
  none: {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    name: 'heat',
    style: 'brighthess',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};
const EFFECT_DEFAULT = EFFECTS.none;
const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-я0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Хештеги введёны неверно.';
const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Обновите страницу.',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте еще раз.',
};
const ALERT_SHOW_TIME = 5000;
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};
const RENDER_PHOTOS_DELAY = 500;
const NUMBER_OF_PHOTOS = 10;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];


export {
  SCALE_STEP,
  SCALE_MIN,
  SCALE_MAX,
  SCALE_DEFAULT,
  EFFECTS,
  EFFECT_DEFAULT,
  MAX_HASHTAG_COUNT,
  VALID_SYMBOLS,
  TAG_ERROR_TEXT,
  BASE_URL,
  Route,
  Method,
  ErrorText,
  ALERT_SHOW_TIME,
  SubmitButtonText,
  RENDER_PHOTOS_DELAY,
  NUMBER_OF_PHOTOS,
  FILE_TYPES,
};
