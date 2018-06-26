const form = document.querySelector("form");
const message = document.getElementById("message");
const smallMessage = document.getElementById("smallMessage");

const amountMessage = "Enter Amount";

const firstMessage = () => {
  message.innerHTML = amountMessage;
  smallMessage.innerHTML = "";
};
const length = () => {
  if (amount.nodeValue.length < 0) {
    smallMessage.innerHTML = "Enter a value greater than 0";
  } else if (amount.value.length > 0 && amount.value.length < 100) {
    smallMessage.innerHTML = "Trillioneeeeer";
  } else if (amount.value.length >= 100) {
    smallMessage.innerHTML = "It's unbreakable!!!";
  } else {
    smallMessage.innerHTML = "";
  }
};

const amount = document.getElementById("amount");
const currencyType = document.getElementById("currency");
const submitBtn = document.getElementById("submit");

const formValidate = () => {
  amount.addEventListener("input", firstMessage);
  amount.addEventListener("input", length);

  submitBtn.addEventListener("mouseover", event => {
    message.innerHTML = "You're a click away";
    smallMessage.innerHTML = "Do it. That's What you are here for.";
  });
  //display converted Text
  submitBtn.addEventListener("click", event => {
    form.innerHTML =
      '<h1>Good job!</h1><p class="success-message">The amount is 123432.</p>';
  });
};

formValidate();
