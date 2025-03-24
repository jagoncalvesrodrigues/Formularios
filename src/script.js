const rootStyles = document.documentElement.style;

const cardFrontNumberElement = document.getElementById('card-front-number');
const cardFrontNameElement = document.getElementById('card-name');
const cardFrontDateElement = document.getElementById('card-date');
const cardbackCvvElement = document.getElementById('card-front-number');

const nameElement = document.getElementById('name');
const cardNumberElement = document.getElementById('card-number');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const cvcNumberElement = document.getElementById('cvc-number');
const buttonConfirm = document.getElementById('main-button');
const error = document.getElementById('error')

const textInputElements = document.querySelectorAll('.text-input');

const emptyInput = event =>{
    event.preventDefault();
    
    if(event.target.name.value === ''){
        
    }
    console.log()
}
nameElement.addEventListener('input',emptyInput);
cardNumberElement.addEventListener('input',emptyInput);



// const emptyInputs= event => {
//     // La función event.preventDefault() en JavaScript se utiliza para prevenir el comportamiento predeterminado de un evento. 
//     event.preventDefault();

//     if(nameElement.value === ""){
//         error.classList.remove("error");
//     }else{
//         error.classList.add("error");
//     }


    // if(cardNumberElement.value === ""){
    //     error.classList.add("shown-error");
    //     error.classList.remove("error");
    // }else{
    //     error.classList.remove("shown-error");
    //     error.classList.add("error");
    // }

    // if(monthElement.value === "" || yearElement.value === ""){
    //     error.classList.add("shown-error");
    //     error.classList.remove("error");
    // }else{
    //     error.classList.remove("shown-error");
    //     error.classList.add("error");
    // }

    // if(cvcNumberElement.value === ""){
    //     error.classList.add("shown-error");
    //     error.classList.remove("error");
    // }else{
    //     error.classList.remove("shown-error");
    //     error.classList.add("error");
    // }

//     console.log(nameElement.value);
// }

const printCardName = () => {
    if(nameElement.value !==""){
        cardFrontNameElement.innerHTML=nameElement.value;
    }else{
        cardFrontNameElement.innerHTML='0000 0000 0000 0000';
    }
}

nameElement.addEventListener('input',printCardName);

// buttonConfirm.addEventListener('click',emptyInputs);

