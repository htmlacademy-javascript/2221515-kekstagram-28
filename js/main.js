import './form.js';
import './scale/scale.js';
import './slider/effect.js';
import { renderGallery } from './gallery.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils/show-alert.js';
import { showSuccessMessage } from './message/success-message.js';
import { showErrorMessage } from './message/error-message.js';
import { hideModal, setOnFormSubmit } from './form.js';
import { initFilterListeners, showFilters } from './filter.js';
import { debounce } from './utils/debounce.js';
import { RENDER_PHOTOS_DELAY } from './constants.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
  initFilterListeners(data, debounce(renderGallery, RENDER_PHOTOS_DELAY));
  showFilters();
} catch (err) {
  showAlert(err.message);
}
