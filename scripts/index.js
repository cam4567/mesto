//кнопки
const buttonEditProfile = document.querySelector('.profile__button-edit');  //кнопка открыть редактирование профиля
const buttonPopupClose = document.querySelector('.popup__close-button');    //кнопка закрыть popup
const openButtonAdd = document.querySelector('.profile__button-add');       //кнопка открыть добавление карточки

//редактирование профиля
const profileName = document.querySelector('.profile__name');              //переменная имени профиля
const profileAbout = document.querySelector('.profile__about');            //переменная о себе профиля
const inputName = document.querySelector('.form__input_edit_name');        //input form NAME
const inputAbout = document.querySelector('.form__input_edit_about');      //input form About
const formEditProfile = document.querySelector('.form-edit-profile');      //переменная form

//добавить карточку
const formElementAdd = document.querySelector('.form-add-element'); //форма popup добавления элемента
const newItemNameInput = document.querySelector('.form__input_type_name'); //input form item name 
const newItemImgInput = document.querySelector('.form__input_type_url');  //input form item url

//popup большое фото
const popupFigcaption = document.querySelector('.popup__figcaption'); //переменная подписи к большой картинке
const popupBigImg = document.querySelector('.popup__big-img'); //переменная большой картинки в popup большой картинки

//template
const elementTemplate = document.querySelector('.element__template').content;
const elementList = document.querySelector('.elements');

//popup
const popupEditProfile = document.querySelector('.popup_edit-profile');       //переменная popup редактироваия профиля
const popupAddForm = document.querySelector('.popup_add-element');            //переменная popup добавления элемента
const popupFullImg = document.querySelector('.popup_full-img');               //переменная popup большой картинки

//Listeners
buttonPopupClose.addEventListener('click', () => closePopup(popupEditProfile));

//cards js load
function renderCards() {
  initialCards.forEach(appendCard);
};
renderCards();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function renderElement(element) {
  const initialElement = elementTemplate.cloneNode(true);
    initialElement.querySelector('.element__title').textContent = element.name;
  const initialImg = initialElement.querySelector('.element__image');
    initialImg.src = element.link;
    initialImg.alt = element.name;
    initialElement.querySelector('.element__image').src = element.link;
  addListeners(initialElement);
  return initialElement;
};

function appendCard(element) {
  elementList.append(renderElement(element));
}
function prependCard(cardInfo) {
  elementList.prepend(renderElement(cardInfo));
}

//функция редактирования профиля
function openpopupEditProfile(){
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  resetError(popupEditProfile);
  disableSubmitButton(popupEditProfile);
  openPopup(popupEditProfile);
}
// функция добавления карточки
function openpopupAddForm() {
  newItemNameInput.value = '';
  newItemImgInput.value = '';
  const form = popupAddForm.querySelector('.form');
  resetError(popupAddForm);
  disableSubmitButton(popupAddForm);
  openPopup(popupAddForm);
}
// disable submit 
function disableSubmitButton(element) {
  const submitButton = element.querySelector('.popup__save-button');
  submitButton.setAttribute('disabled', '');
  submitButton.classList.add('popup__save-button_disabled');
}
//reset errors
function resetError(element) {
  const errorMessages = element.querySelectorAll('.form__error-message');
  errorMessages.forEach(errorMessage => {
    errorMessage.textContent = '' ;
    errorMessage.classList.remove('form__error-message_visible');
  });
  const inputItems = element.querySelectorAll('.form__input');
  inputItems.forEach(inputItem => {
    inputItem.classList.remove('.form__input_error')
  });
};

//функция открытия большого фото
function openImgPopup(event) {
  openPopup(popupFullImg);
  popupBigImg.src = event.target.src;
  popupBigImg.alt = event.target.alt;
  popupFigcaption.textContent = event.target.alt;
  openPopup(popupFullImg);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handlerEscButton);
}

function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.removeEventListener('keydown', handlerEscButton);
}
//popup overlay close
const handlerOverlayClick = (event) => {
  if (event.target === event.currentTarget || event.target.classList.contains('popup__close-button')) {
    closePopup();
  };
};
// popup esc close
const handlerEscButton = (event) => {
  if (event.keyCode === 27) {
    closePopup();
  };
};

// функция submit newCard
function newCard(evt) {
  evt.preventDefault();
  const cardInfo = {
      name: newItemNameInput.value,
      link: newItemImgInput.value,
  };
  closePopup(popupAddForm);
  prependCard(cardInfo);
}
// функция submit profile
function formSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
};

function toggleLike(event) {
  event.target.classList.toggle('element__like-active');
};

function deleteItem(event) {
  event.target.closest('.element').remove();
};

function addListeners(el) {
  el.querySelector('.element__like').addEventListener('click', toggleLike);
  el.querySelector('.element__remove-button').addEventListener('click', deleteItem);
  el.querySelector('.element__image').addEventListener('click', openImgPopup);
};
//open popup button listeners
buttonEditProfile.addEventListener('click', openpopupEditProfile);
openButtonAdd.addEventListener('click', openpopupAddForm);
//popup
popupEditProfile.addEventListener('click', handlerOverlayClick);
popupAddForm.addEventListener('click', handlerOverlayClick);
popupFullImg.addEventListener('click', handlerOverlayClick);
//submit listeners
formElementAdd.addEventListener('submit', newCard);
formEditProfile.addEventListener('submit', formSubmitProfile);