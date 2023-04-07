"use strict";

// TESTIMONIAL SLIDER
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 10) {
    counter = 1;
  }
}, 5000);


// PROGRAMS POPUPS
function togglePopup() {
  document.getElementById(`popup-1`).classList.toggle("active");
}

function togglePopup2() {
  document.getElementById(`popup-2`).classList.toggle("active");
}

function togglePopup3() {
  document.getElementById(`popup-3`).classList.toggle("active");
}

function togglePopup4() {
  document.getElementById(`popup-4`).classList.toggle("active");
}

function togglePopup5() {
  document.getElementById(`popup-5`).classList.toggle("active");
}

function togglePopup6() {
  document.getElementById(`popup-6`).classList.toggle("active");
}

// CONTACT POPUP
function togglePopupc() {
  document.getElementById(`popup-c`).classList.toggle("active");
}

// NEXT AND BACK BUTTONS 
const slider2 = document.querySelector(".slider2");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(`.controls ul`);

var sectionIndex = 0;

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove(`selected`);
    indicator.classList.add("selected");
    slider2.style.transform = "translate(" + sectionIndex * -16.66 + "%)";
  });
});

leftArrow.addEventListener(`click`, function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls .selected").classList.remove(`selected`);
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider2.style.transform = "translate(" + sectionIndex * -16.66 + "%)";
});

rightArrow.addEventListener(`click`, function () {
  sectionIndex = sectionIndex < 5 ? sectionIndex + 1 : 5;
  document.querySelector(".controls .selected").classList.remove(`selected`);
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider2.style.transform = "translate(" + sectionIndex * -16.66 + "%)";
});
