const popupEditProfile = document.querySelector('.popup_edit-profile');       //переменная popup
const buttonEditProfile = document.querySelector('.profile__button-edit');  //кнопка открыть редактирование профиля
const buttonPopupClose = document.querySelector('.popup__close-button'); //кнопка закрыть popup
const buttonSave = document.querySelector('.popup__save-button');  //кнопка сохранить popup 
const profileName = document.querySelector('.profile__name');     //переменная имени профиля
const profileAbout = document.querySelector('.profile__about');   //переменная о себе профиля
const inputName = document.querySelector('.form__input_edit_name');  //input form NAME
const inputAbout = document.querySelector('.form__input_edit_about');  //input form About
const formEditProfile = document.querySelector('.form-edit-profile');
const openButtonAdd = document.querySelector('.profile__button-add'); //кнопка добавления карточки
const popupAddForm = document.querySelector('.popup_add-element');  //popup добавления элемента
const newItemNameInput = document.querySelector('.form__input_type_name'); //input form item name 
const newItemImgInput = document.querySelector('.form__input_type_url');  //input form item url
const formElementAdd = document.querySelector('.form-add-element'); //форма popup добавления элемента
const popupCloseButtonAdd = document.querySelector('.popup__close-add-element'); //кнопка закрыть popup добавления элемента
const elementTemplate = document.querySelector('.element__template').content;
const elementList = document.querySelector('.elements');
const buttonCloseFullImg = document.querySelector('.popup__close-full-img'); //переменная кнопки закрыть картинку большого размера
const popupFullImg = document.querySelector('.popup_full-img');  //переменная popup большой картинки
const popupBigImg = document.querySelector('.popup__big-img'); //переменная большой картинки в popup большой картинки
const popupFigcaption = document.querySelector('.popup__figcaption'); //переменная подписи к большой картинке

   //Listeners
buttonEditProfile.addEventListener('click', /*openPopupProfile*/ () => openPopup(popupEditProfile));
buttonPopupClose.addEventListener('click', /*closePopupProfile*/ () => closePopup(popupEditProfile));
formEditProfile.addEventListener('submit', formSubmitProfile);
openButtonAdd.addEventListener('click', /*openPopupAdd*/ () => openPopup(popupAddForm));
popupCloseButtonAdd.addEventListener('click', /*closePopupAdd*/ () => closePopup(popupAddForm));
formElementAdd.addEventListener('submit', newCard);
buttonCloseFullImg.addEventListener('click', /*closePopupFullIm*/ () => closePopup(popupFullImg));

/////////////////////////////
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
/*
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
*/ /*
//////////////////////////////
function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
}
*/
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
  const initialElement = elementTemplate.cloneNode(true);
  const initialImg = initialElement.querySelector('.element__image');
  initialElement.querySelector('.element__title').textContent = element.name;
  initialImg.src = element.link;
  initialImg.alt = element.name;
  initialElement.querySelector('.element__remove-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  initialElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-active');
  });
  
  initialImg.addEventListener('click', () => openPopup(popupBigImg));
  return initialElement;
}

function renderCard(element) {
  const elementCreated = renderElement(element)
  elementList.prepend(elementCreated)
}

function newCard(evt) {
  evt.preventDefault();
  const cardInfo = {};
  cardInfo.name = newItemNameInput.value;
  cardInfo.link = newItemImgInput.value;
  renderCard(cardInfo);
  closePopup(popupAddForm);
}

initialCards.forEach(renderCard);