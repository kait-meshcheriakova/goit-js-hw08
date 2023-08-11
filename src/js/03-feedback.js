import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputMail = document.querySelector("input[name = 'email']");
const inputMassage = document.querySelector("textarea[name ='message']");
const LOCALSTORAGE_KEY = "feedback-form-state";
const object = {
    email: '',
    message: '',
}
const currentValue = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedValue = JSON.parse(currentValue);

form.addEventListener('input', throttle(saveValue, 500));
form.addEventListener('submit', onFormSubmit);

function saveValue(event) {
    object.email = inputMail.value;
    object.message = inputMassage.value

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
}

if (parsedValue) {
    inputMail.value = parsedValue.email;
    inputMassage.value = parsedValue.message;
}

function onFormSubmit(event) {
    event.preventDefault()
    const formDataObj = {};
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        formDataObj[key] = value;

    });
    console.log({ email: inputMail.value, 
        message: inputMassage.value });
    
    localStorage.removeItem(LOCALSTORAGE_KEY );
    form.reset();
}
