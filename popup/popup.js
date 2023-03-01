const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
popup.style.display = 'block';
})




const buttonClose = document.querySelector('.popup-close');

buttonClose.addEventListener('click', () =>{
    popup.style.display = 'none';//this is to close the pop up by clciking X
})


popup.addEventListener('click', () =>{
    popup.style.display = 'none';//Close the Popup by clicking anywere
})