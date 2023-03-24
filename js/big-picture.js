import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');
const commentsContainer = bigPicture.querySelector('.social__comments');

const onCancelButtonClick = (evt) => {
  evt.preventDefault();
  closeUserModal();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const renderPictureDetails = ({ url, description, likes, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
};

const renderComments = (comments) => {
  const commentsClone = commentsContainer.querySelector('li').cloneNode(true);
  commentsContainer.innerHTML = '';
  const commentFragment = document.createDocumentFragment();


  comments.forEach(({ avatar, name, message }) => {
    const clone = commentsClone.cloneNode(true);
    clone.querySelector('.social__picture').src = avatar;
    clone.querySelector('.social__picture').alt = name;
    clone.querySelector('.social__text').textContent = message;
    commentFragment.append(clone);
  });

  commentsContainer.append(commentFragment);
};


const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);

};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
