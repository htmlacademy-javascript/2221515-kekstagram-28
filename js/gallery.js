import { renderThumbnails } from './thumbnail.js';
import { showBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {

      return;
    }

    const picture = pictures.find(
      (item) => item.id === Number(thumbnail.dataset.thumbnailId)
    );
    showBigPicture(picture);
  });

  renderThumbnails(pictures);
};

export { renderGallery };
