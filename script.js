const burgerButton = document.getElementsByClassName('burger')[0];
const menuBar = document.getElementsByClassName('menu-bar')[0]
const menuLink = document.getElementsByClassName('menu-bar ul');


burgerButton.addEventListener('click', ()=>{
    menuBar.classList.toggle('active');
    
})
