import { isEscapeKey, createNumberGeneratorPlusFive } from './util.js';

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

cancelButton.addEventListener('click', onCancelButtonClick);

const renderPictureDetails = ({ url, description, likes, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
};

const createComment = ({ avatar, name, message }) => {
  const commentsClone = commentsContainer.querySelector('li').cloneNode(true);
  commentsClone.querySelector('.social__picture').src = avatar;
  commentsClone.querySelector('.social__picture').alt = name;
  commentsClone.querySelector('.social__text').textContent = message;

  return commentsClone;
};

const renderComments = (comments = []) => {
  const commentFragment = document.createDocumentFragment();
  comments.forEach(({ avatar, name, message }) => {
    const comment = createComment({ avatar, name, message });
    commentFragment.append(comment);
  });

  commentsContainer.innerHTML = '';
  commentsContainer.append(commentFragment);

  const increaseCommentsShown = createNumberGeneratorPlusFive();
  let commentsShown = increaseCommentsShown();
  if (commentsShown >= comments.length) {
    commentsShown = comments.length;
    commentsLoader.classList.add('hidden');

    return;
  }
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  const fragment = document.createDocumentFragment();
  const assemblyFragment = () => {
    for (let i = 0; i < commentsShown; i++) {
      const commentElement = createComment(comments[i]);
      fragment.append(commentElement);
    }
  };
  assemblyFragment();

  const commentsRefrash = function () {
    commentsContainer.innerHTML = '';
    commentsContainer.append(fragment);
    commentCount.innerHTML = `${commentsShown} из <span class ="comments-count">${comments.length}</span> комментариев`;
  };
  commentsRefrash();

  const onLoaderClick = () => {
    commentsShown = increaseCommentsShown();
    if (commentsShown >= comments.length) {
      commentsShown = comments.length;
    }
    assemblyFragment();
    if (commentsShown >= comments.length) {
      commentsShown = comments.length;
      commentsLoader.classList.add('hidden');
      commentCount.classList.add('hidden');
      commentsLoader.removeEventListener('click', onLoaderClick);
    }
    commentsRefrash();
  };
  commentsLoader.addEventListener('click', onLoaderClick);
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscapeKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

export { showBigPicture };
