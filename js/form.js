import { resetEffects } from './effect.js';
import { resetScale } from './scale.js';


const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-я0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Хештеги введёны неверно.';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');
const uploadFileField = document.querySelector('.img-upload__input');
const cancelButton = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onFocusedFieldKeydown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFocusedFieldKeydown);
};

const isFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === descriptionField;

function onFocusedFieldKeydown(evt) {
  if (evt.key === 'Escape' && !isFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const isValidCount = (tag) => tag.length <= MAX_HASHTAG_COUNT;

const isUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());

  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);

  return isValidCount(tags) && isUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
  if(validateTags(hashtagField.value)) {
    uploadFileField.submit();
  } else {
    evt.preventDefault();
  }
};

uploadFileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
