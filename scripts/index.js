let popupEditProfile = document.querySelector('.popup_edit-profile');       //переменная popup
let buttonEditProfile = document.querySelector('.profile__button-edit');  //кнопка открыть редактирование профиля
let buttonPopupClose = document.querySelector('.popup__close-button'); //кнопка закрыть popup
let buttonSave = document.querySelector('.popup__save-button');  //кнопка сохранить popup 
let profileName = document.querySelector('.profile__name');     //переменная имени профиля
let profileAbout = document.querySelector('.profile__about');   //переменная о себе профиля
let inputName = document.querySelector('.form__input_edit_name');  //input form NAME
let inputAbout = document.querySelector('.form__input_edit_about');  //input form About
let formEditProfile = document.querySelector('.form-edit-profile');
let openButtonAdd = document.querySelector('.profile__button-add'); //кнопка добавления карточки
let popupAddForm = document.querySelector('.popup_add-element');  //popup добавления элемента
let newItemNameInput = document.querySelector('.form__input_type_name'); //input form item name 
let newItemImgInput = document.querySelector('.form__input_type_url');  //input form item url
let formElementAdd = document.querySelector('.form-add-element'); //форма popup добавления элемента
let popupCloseButtonAdd = document.querySelector('.popup__close-add-element'); //кнопка закрыть popup добавления элемента
let elementTemplate = document.querySelector('.element__template').content;
let elementList = document.querySelector('.elements');
let buttonCloseFullImg = document.querySelector('.popup__close-full-img'); //переменная кнопки закрыть картинку большого размера
let popupFullImg = document.querySelector('.popup_full-img');  //переменная popup большой картинки
let popupBigImg = document.querySelector('.popup__big-img'); //переменная большой картинки в popup большой картинки
let popupFigcaption = document.querySelector('.popup__figcaption'); //переменная подписи к большой картинке

   //Listeners
buttonEditProfile.addEventListener('click', openPopupProfile);
buttonPopupClose.addEventListener('click', closePopupProfile);
formEditProfile.addEventListener('submit', formSubmitProfile);
openButtonAdd.addEventListener('click', openPopupAdd);
popupCloseButtonAdd.addEventListener('click', closePopupAdd);
formElementAdd.addEventListener('submit', newCard);
buttonCloseFullImg.addEventListener('click', closePopupFullIm);

/////////////////////////////
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupAdd() {
  openPopup(popupAddForm);
  newItemNameInput.value = '';
  newItemImgInput.value = '';
}

function closePopupProfile() {
  closePopup(popupEditProfile);
}

function closePopupAdd() {
  closePopup(popupAddForm);
}

function closePopupFullIm() {
  closePopup(popupFullImg);
}

//////////////////////////////
function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
}

// функция сохранить popup
function formSubmitProfile(evt) {
  formSubmitProfile
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
}

function openImgPopup(evt) {
  openPopup(popupFullImg);
  popupBigImg.src = evt.target.src;
  popupBigImg.alt = evt.target.alt;
  popupFigcaption.textContent = evt.target.alt;
}

function renderElement(element) {
  let initialElement = elementTemplate.cloneNode(true);
  let initialImg = initialElement.querySelector('.element__image');
  initialElement.querySelector('.element__title').textContent = element.name;
  initialImg.src = element.link;
  initialImg.alt = element.name;
  initialElement.querySelector('.element__remove-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  initialElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-active');
  });
  
  initialImg.addEventListener('click', openImgPopup);
  return initialElement;
}

function renderCard(element) {
  let elementCreated = renderElement(element)
  elementList.prepend(elementCreated)
}

function newCard(evt) {
  evt.preventDefault();
  let cardInfo = {};
  cardInfo.name = newItemNameInput.value;
  cardInfo.link = newItemImgInput.value;
  renderCard(cardInfo);
  closePopupAdd();
}

initialCards.forEach(renderCard);