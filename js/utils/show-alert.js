import { ALERT_SHOW_TIME } from '../constants.js';

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '10';
  alert.style.left = '0';
  alert.style.right = '0';
  alert.style.top = '0';
  alert.style.fontSize = '20px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

export{ showAlert };
