const createNumberGeneratorPlusFive = () => {
  let commentsShown = 0;

  return () => {
    commentsShown += 5;

    return commentsShown;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { isEscapeKey, createNumberGeneratorPlusFive };
