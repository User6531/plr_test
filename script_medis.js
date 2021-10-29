const MainName = document.querySelector('.main-name');
const MainBirthday = document.querySelector('.main-birthday');
const MainGender = document.querySelector('.main-gender');
const MainResultDate = document.querySelector('.main-result-data');
const MainTimeCreate = document.querySelector('.main-time-create');
const resultNumber = document.querySelector('.result-number');

const name = localStorage.getItem('name') || 'Галушко Степан Степанович';
const birthday = localStorage.getItem('birthday') || '25.10.1977';
const gender = localStorage.getItem('gender') || 'male';

MainName.innerHTML = name;

MainBirthday.innerHTML = birthday;

const resultNumberGenerate = randomInteger(201257, 284359);
resultNumber.innerHTML = resultNumberGenerate;
localStorage.setItem('resultNumber', resultNumberGenerate)

const MainResultDateGenerate = resultDataCreate(1);
MainResultDate.innerHTML = MainResultDateGenerate;
localStorage.setItem('MainResultDate', MainResultDateGenerate)

const MainTimeCreateGenerate = resultDataCreate(2);
MainTimeCreate.innerHTML = MainTimeCreateGenerate;
localStorage.setItem('MainTimeCreate', MainTimeCreateGenerate)

if (gender === 'male') {
    MainGender.innerHTML = `чол.`;
} else {
    MainGender.innerHTML = `жін.`
}

function resultDataCreate(count) {
    const now = new Date();

    const dd = now.getDate();
    if (dd < 10) dd = '0' + dd;

    const mm = now.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    const yyyy = now.getFullYear();
    if (yyyy < 10) yyyy = '0' + yyyy;

    return dd-count + '.' + mm + '.' + yyyy + ' ' + randomInteger(9, 20) + ':' + randomInteger(10, 60);
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}