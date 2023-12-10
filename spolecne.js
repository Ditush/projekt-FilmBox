//3
const tlacitko = document.querySelector('#menu-tlacitko')
const change = () => {tlacitko.classList.toggle('show');}

tlacitko.addEventListener('click', 
change)

//3-bonus
const ikona = document.querySelector('.fas')
const ikona2 = () => {ikona.classList.toggle('fa-bars')}
const ikona3 = () => {ikona.classList.toggle('fa-xmark');}

ikona.addEventListener('click', 
ikona2)
ikona.addEventListener('click', 
ikona3)






