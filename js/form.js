"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var form = exports.form = document.querySelector("form");
var message = exports.message = document.getElementById("message");
var smallMessage = exports.smallMessage = document.getElementById("smallMessage");

var amountMessage = "Enter Amount";

var firstMessage = exports.firstMessage = function firstMessage() {
  message.innerHTML = amountMessage;
  smallMessage.innerHTML = "";
};
var length = exports.length = function length() {
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