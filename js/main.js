import './form.js';
import './scale.js';
import './effect.js';
import { renderGallery } from './gallery.js';
import { AVATAR_NUMBER_MAX, AVATAR_NUMBER_MIN, COMMENTS, LIKES_AMOUNT_MAX, LIKES_AMOUNT_MIN, NAMES, getPhotos, PHOTOS_AMOUNT, PHOTO_DESCRIPTIONS } from './data.js';

const photos = getPhotos({
  photoDescriptions: PHOTO_DESCRIPTIONS,
  likesAmountMin: LIKES_AMOUNT_MIN,
  likesAmountMax: LIKES_AMOUNT_MAX,
  avatarNumberMin: AVATAR_NUMBER_MIN,
  avatarNumberMax: AVATAR_NUMBER_MAX,
  comments: COMMENTS,
  names: NAMES,
  photosAmount: PHOTOS_AMOUNT,
});

renderGallery(photos);
