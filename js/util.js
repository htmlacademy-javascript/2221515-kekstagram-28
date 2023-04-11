const createNumberGeneratorPlusFive = () => {
  let commentsShown = 0;

  return () => {
    commentsShown += 5;

    return commentsShown;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

import { ALERT_SHOW_TIME } from './constants.js';

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.left = '0';
  alert.style.right = '0';
  alert.style.top = '20%';
  alert.style.fontSize = '20px';
  alert.style.textAlign = 'center';
  alert.style.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert, isEscapeKey, createNumberGeneratorPlusFive };
