let popup = document.querySelector('.popup');       //переменная popup
let buttonEditProfile = document.querySelector('.profile__button-edit');  //кнопка открыть редактирование профиля
let buttonPopupClose = popup.querySelector('.popup__close-button'); //кнопка закрыть popup
let buttonSave = popup.querySelector('.popup__save-button');  //кнопка сохранить popup 
let profileName = document.querySelector('.profile__name');     //переменная имени профиля
let profileAbout = document.querySelector('.profile__about');   //переменная о себе профиля
let inputName = document.querySelector('.popup__input_edit_name');  //input form NAME
let inputAbout = document.querySelector('.popup__input_edit_about');  //input form About
let formEditProfile = document.querySelector('.form-edit-profile');

// функция открытия popup
function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
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

buttonEditProfile.addEventListener('click', openPopupProfile);
buttonPopupClose.addEventListener('click', closePopupProfile);
formEditProfile.addEventListener('submit', formSubmitProfile);
