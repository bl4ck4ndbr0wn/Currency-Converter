"use strict";

var form = document.querySelector("form");
var message = document.getElementById("message");
var smallMessage = document.getElementById("smallMessage");

var amountMessage = "Enter Amount";

var firstMessage = function firstMessage() {
  message.innerHTML = amountMessage;
  smallMessage.innerHTML = "";
};
var length = function length() {
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

var amount = document.getElementById("amount");
var currencyType = document.getElementById("currency");
var submitBtn = document.getElementById("submit");

var formValidate = function formValidate() {
  amount.addEventListener("input", firstMessage);
  amount.addEventListener("input", length);

  submitBtn.addEventListener("mouseover", function(event) {
    message.innerHTML = "You're a click away";
    smallMessage.innerHTML = "Do it. That's What you are here for.";
  });
  //display converted Text
  submitBtn.addEventListener("click", function(event) {
    form.innerHTML =
      '<h1>Good job!</h1><p class="success-message">The amount is 123432.</p>';
  });
};

formValidate();
