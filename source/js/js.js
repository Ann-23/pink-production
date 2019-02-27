var pageHeader = document.querySelector(".page-header");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

pageHeader.classList.remove("page-header--nojs");
navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed") & pageHeader.classList.contains("page-header--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageHeader.classList.remove("page-header--closed");
    pageHeader.classList.add("page-header--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
    pageHeader.classList.remove("page-header--opened");
    pageHeader.classList.add("page-header--closed");
  }
});

var popupNotDone = document.querySelector(".pop-up--not-done");
var popupDone = document.querySelector(".pop-up--done");
var linkOk = document.querySelector(".button--ok");
var link = document.querySelector(".button--close");
var form = document.querySelector("form");
var surname = document.querySelector("[name=surname]");
var firstname = document.querySelector("[name=firstname]");
var email = document.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  if (!surname.value || !firstname.value || !email.value) {
    evt.preventDefault();
    popupNotDone.classList.add("pop-up--show");
    surname.classList.add("input__control--red");
    firstname.classList.add("input__control--red");
    email.classList.add("input__control--red");
    linkOk.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupNotDone.remove("pop-up--show");
    });
  } else {
    evt.preventDefault();
    popupDone.classList.add("pop-up--show");
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupDone.remove("pop-up--show");
    });
  }
});
