const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = (start) => {
  let lastGeneratedId = start;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generatePhotoId = createIdGenerator(0);
const generateCommentId = createIdGenerator(25);

const PHOTOS_AMOUNT = 25;
const LIKES_AMOUNT_MIN = 15;
const LIKES_AMOUNT_MAX = 200;
const AVATAR_NUMBER_MIN = 1;
const AVATAR_NUMBER_MAX = 6;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Руднева София',
  'Логинов Михаил',
  'Бычкова Алиса',
  'Марков Виктор',
  'Петров Павел',
  'Лебедев Максим',
  'Богданова Виктория',
  'Зотов Дмитрий',
  'Борисова Николь',
  'Петров Леонид',
  'Зиновьев Арсений',
  'Иванова Виктория',
  'Агафонова Арина',
  'Кузнецов Алексей',
  'Лебедева Мария',
  'Соколов Артём',
  'Матвеева София',
  'Беляева Екатерина',
  'Корнева Ольга',
  'Зорина Валерия',
];
const PHOTO_DESCRIPTIONS = [
  'Красивый закат над океаном.',
  'Крупный план ярких лепестков цветка.',
  'Группа друзей смеется и наслаждается пикником.',
  'Величественный горный массив, покрытый снегом.',
  'Вид на ночной город со сверкающими огнями.',
  'Милый щенок лежит на уютном одеяле.',
  'Вкусная тарелка суши с палочками.',
  'Семья держится за руки и гуляет по пляжу.',
  'Старинный автомобиль припаркован перед красочным зданием.',
  'Потрясающий водопад в окружении буйной зелени.',
  'Группа музыкантов, играющих на инструментах на сцене.',
  'Потрясающий вид на Гранд-Каньон.',
  'Маленький ребенок пускает мыльные пузыри в парке.',
  'Пара в объятиях любви.',
  'Мирный лес с солнечными лучами, пробивающимися сквозь деревья.',
  'В небе парит разноцветный воздушный шар.',
  'Группа друзей гуляет по красивому национальному парку.',
  'Чашка кофе и свежий круассан на столе.',
  'Красивая невеста в свадебном платье.',
  'Крупным планом глаза человека, отражающие солнечный свет.',
];

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_NUMBER_MIN, AVATAR_NUMBER_MAX)}.svg`,
  messages: getRandomArrayElement(COMMENTS),
  names: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoId()}`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(LIKES_AMOUNT_MIN, LIKES_AMOUNT_MAX),
  comments: Array.from({ length: PHOTOS_AMOUNT }, createComment),
});

const photosArray = () => Array.from({length:PHOTOS_AMOUNT}, createPhoto);

