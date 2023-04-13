import { isEscapeKey } from '../utils/util.js';
import { onFocusedFieldKeydown } from '../form.js';

const body = document.querySelector('body');
const errorTemplateFragment = document.querySelector('#error').content.querySelector('.error');

function showErrorMessage() {
  const errorMessage = errorTemplateFragment.cloneNode(true);
  body.appendChild(errorMessage);
  const errorButton = document.querySelector('.error__button');

  function onClosedErrorMessage() {
    const onErrorMessageClose = document.querySelector('.error');
    onErrorMessageClose.remove();
  }

  errorButton.addEventListener('click', onClosedErrorMessage);

  document.removeEventListener('keydown', onFocusedFieldKeydown);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      onClosedErrorMessage();
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('error')) {
      onClosedErrorMessage();
    }
  });
}

export { showErrorMessage };
