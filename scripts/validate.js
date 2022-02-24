// функция отображения ошибки
const showErrorMessage = ({errorClass, inputErrorClass}, form, inputItem, errorMessage) => {
    inputItem.classList.add(inputErrorClass);
    const message = form.querySelector(`.form__error-message_input-${inputItem.name}`);
    message.textContent = errorMessage;
    message.classList.add(errorClass);
}
// функция скрытия ошибки
const hideErrorMessage = ({errorClass, inputErrorClass}, form, inputItem) => {
    inputItem.classList.remove(inputErrorClass);
    const message = form.querySelector(`.form__error-message_input-${inputItem.name}`);
    message.classList.remove(errorClass);
    message.textContent = ' ';
}
// функция проверки валидности input
function checkInputValidity (rest, form, inputItem) {
    if (inputItem.validity.valid) {
        hideErrorMessage (rest, form, inputItem);
    } else {
        showErrorMessage (rest, form, inputItem, inputItem.validationMessage);
    };
}

// функция проверки невалидности input
const hasInvalidInput = (inputItems)  => {
    return inputItems.some(inputItem => {
        return !inputItem.validity.valid;
    });
};

//кнопка submit
const submitButtonActivation = ({ disabledButtonClass }, inputItems, button) => {
    if (hasInvalidInput(inputItems)) {
        button.setAttribute('disabled', '');
        button.classList.add(disabledButtonClass);
    } else {
        button.removeAttribute('disabled');
        button.classList.remove(disabledButtonClass);
    };
};

//input 
function addInputListener({inputSelector, popupSaveButtonSelector, ...rest}, form){
    const inputItems = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(popupSaveButtonSelector);
    inputItems.forEach(inputItem => {
        inputItem.addEventListener('input', function() {
            checkInputValidity(rest, form, inputItem);
            submitButtonActivation(rest, inputItems, button);
        });
    });
};

// form listeners
function addFormListener(formSelector,rest) {
    const forms = Array.from(document.querySelectorAll(formSelector))
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
        });
        addInputListener(rest,form);
    });
};

function enableValidation({formSelector, ...rest}) {
    addFormListener(formSelector, rest)
}
enableValidation ({
    formSelector: '.form',
    inputSelector: '.form__input',
    popupSaveButtonSelector: '.popup__save-button',
    disabledButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'form__input_error',
    errorClass: 'form__error-message_visible',
})