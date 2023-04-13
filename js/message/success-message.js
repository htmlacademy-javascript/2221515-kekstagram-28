import { isEscapeKey } from '../utils/util.js';

const body = document.querySelector('body');
const successTemplateFragment = document.querySelector('#success').content.querySelector('.success');

function showSuccessMessage() {
  const successMessage = successTemplateFragment.cloneNode(true);
  body.appendChild(successMessage);
  const successButton = document.querySelector('.success__button');

  function onClosedSuccessMessage() {
    const onSuccessMessageClose = document.querySelector('.success');
    onSuccessMessageClose.remove();
  }

  successButton.addEventListener('click', onClosedSuccessMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      onClosedSuccessMessage();
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('success')) {
      onClosedSuccessMessage();
    }
  });
}

export { showSuccessMessage };
