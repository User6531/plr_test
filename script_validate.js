const ValName = document.querySelector('.val-name');
const ValBirthday = document.querySelector('.val-brthd');
const ValGender = document.querySelector('.val-gender');
const ValResultDate = document.querySelector('.val-result-time');
const ValTimeCreate = document.querySelector('.val-timeCreate');
const ValresultNumber = document.querySelectorAll('.val-number');

const name = localStorage.getItem('name') || 'Галушко Степан Степанович';
const birthday = localStorage.getItem('birthday') || '25.10.1977';
const gender = localStorage.getItem('gender') || 'male';
const MainTimeCreate = localStorage.getItem('MainTimeCreate') || '2021-05-28 22:23';
const MainResultDate = localStorage.getItem('MainResultDate') || '2021-05-28 22:23'
const resultNumber = localStorage.getItem('resultNumber') || '256427';

ValName.innerHTML = name;
ValBirthday.innerHTML = birthday;

ValResultDate.innerHTML = MainResultDate;
ValTimeCreate.innerHTML = MainTimeCreate;

ValresultNumber.forEach(item=> {
    item.innerHTML = resultNumber;
})


if (gender === 'male') {
    ValGender.innerHTML = `чол.`;
} else {
    ValGender.innerHTML = `жін.`
}