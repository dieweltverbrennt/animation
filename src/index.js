import './style.scss';

const btn = document.querySelector('button');
const text = document.querySelector('.text');

btn.addEventListener('click', () => {
    text.classList.toggle('active');
});