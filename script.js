// ##### FORM ELEMENTS #####
const formSection = document.querySelector(".form-section");
const form = document.getElementById("form");
const formCardholderName = document.getElementById("form-cardholder-name");
const formCardNumber = document.getElementById("form-card-number");
const formExpiryMonth = document.getElementById("form-expiry-month");
const formExpiryYear = document.getElementById("form-expiry-year");
const formCvc = document.getElementById("form-cvc");
const confirmButton = document.querySelector(".confirm-btn");
const continueButton = document.querySelector(".continue-btn");
const svgIcon = document.querySelector(".icon-complete-svg");
// ##### CARD ELEMENTS #####
const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardCvc = document.getElementById("card-cvc");
const cardExpiryDate = document.getElementById("card-expiry-date");
// ##### SMALL TAGS #####
const smallTagName = document.querySelector("small.error-msg-cardholder");
const smallTagNumber = document.querySelector("small.error-msg-cardnumber");
const smallTagMonth = document.querySelector("small.error-msg-expiry-month");
const smallTagYear = document.querySelector("small.error-msg-expiry-year");
const smallTagCvc = document.querySelector("small.error-msg-cvc");

const thanksMessage = document.querySelector("p.thanks-msg");
const successMessage = document.querySelector("p.success-msg");
function cardholderErrorName() {
  let inputValue = formCardholderName.value;
  let inputString = inputValue.match(/\d+/g);

  if (!(inputString === null)) {
    smallTagName.innerHTML = "Name cannot contain a number";
    smallTagName.classList.add("display-error-msg");
    formCardholderName.style.border = "1px solid red";
  } else {
    if (inputValue.length > 1) {
      cardName.innerText = inputValue;
      smallTagName.classList.remove("display-error-msg");
      formCardholderName.style.border = "1px solid hsl(278, 68%, 11%)";
      formCardholderName.classList.add("filledCorrectly");
    }
  }
  if (inputValue === "") {
    formCardholderName.style.border = "1px solid red";
    smallTagName.classList.add("display-error-msg");
  }
}
function cardNumberError() {
  let inputValue = formCardNumber.value;
  let inputNum = /^\d+$/.test(inputValue);
  if (inputValue === "") {
    formCardNumber.style.border = "1px solid red";
    smallTagNumber.classList.add("display-error-msg");
  } else if (inputNum && inputValue.length >= 16) {
    cardNumber.innerText = inputValue;
    smallTagNumber.classList.remove("display-error-msg");
    formCardNumber.style.border = "1px solid hsl(278, 68%, 11%)";
    formCardNumber.classList.add("filledCorrectly");
  } else if (inputNum && inputValue.length < 16) {
    smallTagNumber.innerHTML = "Card number less than 16";
    smallTagNumber.classList.add("display-error-msg");
  } else {
    smallTagNumber.innerHTML = "Wrong format numbers only";
    smallTagNumber.classList.add("display-error-msg");
    formCardNumber.style.border = "1px solid red";
  }
}
function expiryDateError() {
  // ### MONTH INPUT ###
  inputNumMonth = /^\d+$/.test(formExpiryMonth.value);
  if (formExpiryMonth.value === "") {
    smallTagMonth.classList.add("display-error-msg");
    formExpiryMonth.style.border = "1px solid red";
  } else if (inputNumMonth && formExpiryMonth.value.length >= 2) {
    smallTagMonth.classList.remove("display-error-msg");
    formExpiryMonth.style.border = "1px solid hsl(278,68%,11%)";
    formExpiryMonth.classList.add("filledCorrectly");
  }
  if (!inputNumMonth && formExpiryMonth.value.length > 0) {
    formExpiryMonth.style.border = "1px solid red";
    smallTagMonth.classList.add("display-error-msg");
    smallTagMonth.innerText = "Numbers only";
  }
  if (formExpiryMonth.value.length > 0 && formExpiryMonth.value.length < 2) {
    formExpiryMonth.style.border = "1px solid red";
    smallTagMonth.innerText = "can't be less than 2";
  }
  if (Number(formExpiryMonth.value) > 12) {
    smallTagMonth.classList.add("display-error-msg");
    formExpiryMonth.style.border = "1px solid red";
    smallTagMonth.innerText = "invalid month";
  }
  // ### YEAR INPUT ###
  inputNumYear = /^\d+$/.test(formExpiryYear.value);
  if (formExpiryYear.value === "") {
    formExpiryYear.style.border = "1px solid red";
    smallTagMonth.classList.add("display-error-msg");
  } else if (inputNumYear && formExpiryMonth.value.length >= 2) {
    smallTagMonth.classList.remove("display-error-msg");
    formExpiryYear.style.border = "1px solid hsl(278, 68%,11%)";
    formExpiryYear.classList.add("filledCorrectly");
  }
  if (!inputNumYear && formExpiryYear.value.length > 0) {
    formExpiryYear.style.border = "1px solid red";
    smallTagMonth.classList.add("display-error-msg");
    smallTagMonth.innerText = "Numbers only";
  }
  if (formExpiryYear.value.length > 0 && formExpiryYear.value.length < 2) {
    formExpiryMonth.style.border = "1px solid red";
    smallTagMonth.innerText = "can't be less than 2";
  }
  if (Number(formExpiryYear.value) < 22 && formExpiryYear.value.length > 0) {
    smallTagMonth.classList.add("display-error-msg");
    formExpiryMonth.style.border = "1px solid red";
    smallTagMonth.innerText = "invalid year";
  }
  // ### CVC INPUT ###
  inputNumCvc = /^\d+$/.test(formCvc.value);
  if (formCvc.value === "") {
    formCvc.style.border = "1px solid red";
    smallTagCvc.classList.add("display-error-msg");
  } else if (inputNumCvc && formCvc.value.length >= 3) {
    smallTagCvc.classList.remove("display-error-msg");
    formCvc.style.border = "1px solid hsl(278, 68%, 11%)";
    formCvc.classList.add("filledCorrectly");
    cardCvc.innerText = formCvc.value;
  } else {
    smallTagCvc.innerText = "Numbers only";
    smallTagCvc.classList.add("display-error-msg");
    formCvc.style.border = "1px solid red";
  }
  if (formCvc.value.length > 0 && formCvc.value.length < 3) {
    formCvc.style.border = "1px solid red";
    smallTagCvc.innerText = "cvc can't be less than 3";
  }
}
function correctInputFields() {
  correctNameInput = formCardholderName.classList.contains("filledCorrectly");
  correctNumberInput = formCardNumber.classList.contains("filledCorrectly");
  correctMonthInput = formExpiryMonth.classList.contains("filledCorrectly");
  correctYearInput = formExpiryYear.classList.contains("filledCorrectly");
  correctCvcInput = formCvc.classList.contains("filledCorrectly");
  if (
    correctNameInput &&
    correctNumberInput &&
    correctMonthInput &&
    correctYearInput &&
    correctCvcInput
  ) {
    svgIcon.classList.remove("hide-element");
    form.classList.add("hide-element");
    continueButton.classList.remove("hide-element");
    successMessage.classList.remove("hide-element");
    thanksMessage.classList.remove("hide-element");
    formSection.style.marginTop = "6rem";
    console.log(formSection.style.marginTop);
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  cardholderErrorName();
  cardNumberError();
  expiryDateError();
  correctInputFields();
});
