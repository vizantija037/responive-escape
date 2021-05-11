window.onload = function () {
    window.scrollTo(0,0);
};

const burgerButton = document.getElementsByClassName('burger')[0];
const menuBar = document.getElementsByClassName('menu-bar')[0]
const menuLink = document.getElementById('click-control');


burgerButton.addEventListener('click', toggleButton);
menuLink.addEventListener('click', toggleButton);

function toggleButton (){
    menuBar.classList.toggle('active');
}


const form = document.getElementById('form');
const submit = document.getElementById('submit');
const messageBox = document.getElementById('insert-message');
const nameBox = document.getElementById('insert-name');
const mailBox = document.getElementById('insert-mail');

submit.addEventListener('click', validateMessage);

function validateMessage(e){
    e.preventDefault()
    if(messageBox.value !== '' && nameBox.value !== '' && mailBox.value !== ''){
        alert('\nMessage sent!\n\nThank you for time!');
        window.location.reload();
    } else {
        alert('\nMessage NOT sent!!!\n\nFill in all the fields in the contact form!');   
        
}}
    