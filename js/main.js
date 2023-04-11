import './form.js';
import './scale/scale.js';
import './slider/effect.js';
import { renderGallery } from './gallery.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showSuccessMessage } from './message/success-message.js';
import { showErrorMessage } from './message/error-message.js';
import { hideModal, setOnFormSubmit } from './form.js';

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
} catch (err) {
  showAlert(err.message);
}
