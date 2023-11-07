import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('input', throttle(onFormChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

const getLocalStorage = () => {
  const savedValues = localStorage.getItem(STORAGE_KEY);
  const savedDataObject = JSON.parse(savedValues);
  return savedDataObject;
};

const localData = getLocalStorage();

// ?. - if null or undefind = don`t check a
// check if smth in LocalStorage 

if (localData?.email) {
  refs.form.elements.email.value = localData.email
}
if (localData?.message) {
  refs.form.elements.message.value = localData.message
}

function onFormChange() {
  const email = refs.form.elements.email.value;
  const message = refs.form.elements.message.value;
  if (email) {
    formData.email = email;
  }

  if (message) {
    formData.message = message
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(e) {
  e.preventDefault()
  const data = getLocalStorage();
  console.log("data", data);
  localStorage.removeItem(STORAGE_KEY);
  refs.form.elements.email.value = "";
  refs.form.elements.message.value = "";
}
