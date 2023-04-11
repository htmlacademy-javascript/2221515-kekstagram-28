import { isEscapeKey } from './utils/util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');


const onCancelButtonClick = (evt) => {
  evt.preventDefault();
  closeUserModal();
};

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
}

export { onCancelButtonClick, onEscapeKeydown };
