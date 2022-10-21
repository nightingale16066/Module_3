// task 1
const files = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const findRightFiles = (arr) => arr.filter(item=> {
  return item.match(/\.(j|t)sx?$/)
})

console.log(findRightFiles(files));

// task 2
const validTest = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io'];
const invalidTest = ['my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];

const reg = /^\w+@[A-Za-z]{3,}\.\w{2,5}$/;

validTest.forEach(item => {
  console.log(reg.test(item));
})

invalidTest.forEach(item => {
  console.log(reg.test(item));
})

// task 3

const testStr = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';
const reg3 = /(?<=\().*?(?=\))/g

console.log(testStr.match(reg3));

// task 4

const urlString = 'Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег домены вида http://site.ru, https://site.com на ';
const urlReg = /(\bhttps?:\/\/(\w+\.(ru|com)\b))/g;

console.log(urlString.replace(urlReg, '<a href="$1">$2</a>'));


