//проверка длины строки
const getStrokeLength = (stroke, length) => {
  if (stroke.length >= length) {

    return true;
  }

  return false;
};

getStrokeLength('Привет, как дела?', 20);

//проверка на палиндром

const isPalindrome = (stroke) => {
  const normalizedStroke = `${stroke}`.split(' ').join('').toLowerCase();

  return !!(normalizedStroke.split('').reverse().join('') === normalizedStroke);
};

isPalindrome('Лёша на полке клопа нашёл');

//извлечение чисел из строки

const getNumber = (value) => {
  const array = `${value}`.split('');

  const numbers = array.filter((item) => {
    const number = parseFloat(item);

    return !!(number === 0 || number);
  });

  return numbers.join('');
};

getNumber('-ыыы 1ывфыв222фывфы 3123');

// //формирование адресов файлов(добивка)

const addSymbol = (startStroke, minLength, additionalStroke) => {
  const startArray = `${startStroke}`.split('');
  const additionalArray = `${additionalStroke}`.split('');

  if (startArray.length >= minLength) {
    return startStroke;
  }

  if (startArray.length < minLength) {
    let result = [...startArray];

    while (result.length < minLength) {
      const delta = minLength - result.length;
      if (delta > 0) {
        if (additionalStroke.length <= delta) {
          result = [...additionalArray, ...result];
        } else {
          additionalArray.length = delta;
          result = [...additionalArray, ...result];
        }
      }
    }
    return result.join('');
  }
};

addSymbol('q', 4, 'we');

