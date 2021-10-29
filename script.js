const name = document.querySelector('#name');
const birthday = document.querySelector('#birthday');
const gender = document.querySelector('#gender');
const submit = document.querySelector('#submit');
const remember = document.querySelector('#remember');
const form = document.querySelector('#form');
const plrBody = document.querySelector('.plr-body');

const MainName = document.querySelector('.main-name');
const MainBirthday = document.querySelector('.main-birthday');
const MainGender = document.querySelector('.main-gender');
const MainResultData = document.querySelector('.main-result-data');
const MainTimeCreate = document.querySelector('.main-time-create');
const resultNumber = document.querySelector('.result-number');

name.value = localStorage.getItem('name') || '';
birthday.value = localStorage.getItem('birthday') || '';
gender.value = localStorage.getItem('gender') || 'male';

name.addEventListener('input', (e)=> {
    name.value = e.target.value;
})
birthday.addEventListener('input', (e)=> {
    birthday.value  = e.target.value;
})
gender.addEventListener('input', (e)=> {
    gender.value = e.target.value;
})

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if (remember.checked) {
        localStorage.setItem('name', name.value)
        localStorage.setItem('birthday', birthday.value)
        localStorage.setItem('gender', gender.value)
    } else {
        localStorage.removeItem('name');
        localStorage.removeItem('birthday');
        localStorage.removeItem('gender');
    }
    form.style.display = 'none';
    plrBody.style.display = 'block';

    MainName.innerHTML = name.value;

    MainBirthday.innerHTML = birthday.value;

    resultNumber.innerHTML = `${randomInteger(201257, 284359)}`;

    MainResultData.innerHTML = `${resultDataCreate(1)}`;

    MainTimeCreate.innerHTML = `${resultDataCreate(2)}`;

    if (gender.value === 'male') {
        MainGender.innerHTML = `чол.`;
    } else {
        MainGender.innerHTML = `жін.`
    }
});

const resultDataCreate = (count) => {
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