let when = [
  "Год назад",
  "До нашей эры",
  "Вчера",
  "Сегодня",
  "Две недели назад",
  "Давным давно",
];
let where = [
  "на фестивале",
  "в Нью-Йорке",
  "в Ливерпуле",
  "в Хогвартсе",
  "в парке",
  "дома",
  "в далёкой далёкой галактике",
];
let what = [
  "парижский",
  "незнакомый",
  "низкий",
  "колючий",
  "классный",
  "тихий",
  "веселый",
];
let who = [
  "компьютер",
  "пират",
  "кот",
  "мальчик",
  "ученый",
  "кикимер",
  "барсук",
  "робот",
  "Гарри Поттер",
  "динозавр",
  "инопланетянин",
  "Шерлок Холмс",
  "Пикассо",
];
let whatdid = [
  "приехал в парк",
  "залез на дерево",
  "надел куртку",
  "заснул за работой",
  "нашел утюг",
  "испугался крысы",
  "нарисовал картину",
  "сыграл в игру",
];
let whatcame = [
  "интересное дело",
  "что-то хорошее",
  "веселье",
  "ничего",
  "нечто",
];
let whatsay = [
  "Hello, world!",
  "...",
  "было весело",
  "красиво",
  "эх, были времена",
];
let rand1 = Math.floor(Math.random() * when.length);
let rand2 = Math.floor(Math.random() * where.length);
let rand3 = Math.floor(Math.random() * what.length);
let rand4 = Math.floor(Math.random() * who.length);
let rand5 = Math.floor(Math.random() * whatdid.length);
let rand6 = Math.floor(Math.random() * whatcame.length);
let rand7 = Math.floor(Math.random() * whatsay.length);
let phrase =
  when[rand1] +
  " " +
  where[rand2] +
  " " +
  what[rand3] +
  " " +
  who[rand4] +
  " " +
  whatdid[rand5] +
  ". Из этого вышло " +
  whatcame[rand6] +
  ". Люди сказали: «" +
  whatsay[rand7] +
  "»";
document.write(phrase);
