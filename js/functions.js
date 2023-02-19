const getStrokeLength = function (stroke, length) {
  if (stroke.length >= length) {
    return true;
  }

  return false;
};

getStrokeLength('Привет, как дела?', 20);
getStrokeLength('Привет, как дела?', 10);
