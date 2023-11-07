import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const savedValues = localStorage.getItem(STORAGE_KEY);
const savedDataObject = JSON.parse(savedValues);

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};
// ?. - if null or undefind = don`t check 
if (savedDataObject?.email) {
  refs.form.elements.email.value = savedDataObject.email
}
if (savedDataObject?.message) {
  refs.form.elements.message.value = savedDataObject.message
}

refs.form.addEventListener('input', throttle(onFormChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

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
  const data = savedDataObject;
  console.log("data", data);
  localStorage.removeItem(STORAGE_KEY);
  refs.form.elements.email.value = "";
  refs.form.elements.message.value = "";
}