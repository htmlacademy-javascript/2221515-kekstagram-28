import { createNumberGeneratorPlusFive } from './utils/util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-count');
const commentsCountContainer = document.querySelector('.comments-count');
const commentsShownContainer = document.querySelector('.comments-shown');
const commentsLoader = document.querySelector('.comments-loader');

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

  const commentsRefrash = () => {
    commentsContainer.innerHTML = '';
    commentsContainer.append(fragment);
    commentsShownContainer.textContent = commentsShown;
    commentsCountContainer.textContent = comments.length;
  };

  commentsRefrash();

  const onLoaderClick = () => {
    commentsLoader.classList.remove('hidden');
    commentCount.classList.remove('hidden');

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

export { renderComments };
