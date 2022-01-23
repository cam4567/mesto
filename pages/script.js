let popup = document.querySelector('.popup');       //переменная popup
let buttonEditProfile = document.querySelector('.profile__button-edit');  //кнопка открыть редактирование профиля
let buttonPopupClose = document.querySelector('.popup__close-button'); //кнопка закрыть popup
let buttonSave = document.querySelector('.popup__save-button');  //кнопка сохранить popup 
let profileName = document.querySelector('.profile__name');     //переменная имени профиля
let profileAbout = document.querySelector('.profile__about');   //переменная о себе профиля
let inputName = document.querySelector('.popup__input_edit_name');  //input form NAME
let inputAbout = document.querySelector('.popup__input_edit_about');  //input form About

const buttonLike = document.querySelectorAll('.element__like');   //кнопка like

// функция открытия popup
function openPopupProfile() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

// функция закрытия popup
function closePopupProfile() {
  popup.classList.remove('popup_opened');
}

// функция сохранить popup
function formSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  closePopupProfile();
}
// функция like popup  
buttonLike.forEach(function(buttonLike) {
  buttonLike.addEventListener('click', function() {
    buttonLike.classList.replace("element__like", "element__like-active");
  });
});

buttonEditProfile.addEventListener('click', openPopupProfile);
buttonPopupClose.addEventListener('click', closePopupProfile);
buttonSave.addEventListener('click', formSubmitProfile);
