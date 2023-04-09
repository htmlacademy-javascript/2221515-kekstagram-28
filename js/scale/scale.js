import { onSmallerControlClick } from './scale-minus.js';
import { onBiggerControlClick } from './scale-plus.js';


const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');

scaleControlSmaller.addEventListener('click', onSmallerControlClick);
scaleControlBigger.addEventListener('click', onBiggerControlClick);
