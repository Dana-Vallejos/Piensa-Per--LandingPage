const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
})

const btnop1= document.getElementById("op-1");
const btnop2= document.getElementById("op-2");
const op1Text= document.getElementById("op-1-text");
const op2Text= document.getElementById("op-2-text");

btnop1.onclick = function(){
    op1Text.style.display="block";
    op2Text.style.display="none";
    btnop1.style.borderBottom = "4px solid #001E76";
    btnop2.style.borderBottom = "none";
}

btnop2.onclick = function(){
    op1Text.style.display="none";
    op2Text.style.display="block";
    btnop1.style.borderBottom = "none";
    btnop2.style.borderBottom = "4px solid #001E76";
}

//Get data
const nameInput = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(nameInput.value == '' || nameInput.value == null){
        messages.push('Name is required')
    }

    if(!emailIsValid(email.value)){
        messages.push('Email is required')
    }

    if(message.value == '' || message.value == null){
        messages.push('Message is required')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',') 
    }
})

function emailIsValid (email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}