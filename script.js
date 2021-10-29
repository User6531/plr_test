const name = document.querySelector('#name');
const birthday = document.querySelector('#birthday');
const gender = document.querySelector('#gender');
const submit = document.querySelector('#submit');
const remember = document.querySelector('#remember');
const form = document.querySelector('#form');
const plrBody = document.querySelector('.plr-body');

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
    localStorage.setItem('name', name.value)
    localStorage.setItem('birthday', birthday.value)
    localStorage.setItem('gender', gender.value)
    window.location.href = 'medis.html';
});
