document.addEventListener("DOMContentLoaded", function(e) { 
  console.log(e)
});

document.getElementById("login").onclick = function () {
  document.querySelector("#login").classList.toggle("main__top-hide");
  document.querySelector(".main__top-separator").classList.toggle("main__top-hide");
  document.querySelector("#register").classList.toggle("main__top-hide");
  document.querySelector("#user").classList.toggle("main__top-hide");
  document.querySelector(".main__top-numberOfGoods").classList.toggle("main__top-hide");
};

document.getElementById("user").onclick = function () {
  document.querySelector("#login").classList.toggle("main__top-hide");
  document.querySelector(".main__top-separator").classList.toggle("main__top-hide");
  document.querySelector("#register").classList.toggle("main__top-hide");
  document.querySelector("#user").classList.toggle("main__top-hide");
  document.querySelector(".main__top-numberOfGoods").classList.toggle("main__top-hide");
};

document.getElementById("register").onclick = function () {
  alert("Push sign in button pls ^__^");
};

// Burger open script

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger span").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("animate");
  document.querySelector(".menuGrey").classList.toggle("animate");
  document.querySelector(".main__top-basket").classList.toggle("active");
});

document.querySelector(".menu__women").addEventListener("click", function () {
  document.querySelector(".menu").classList.remove("animate");
  document.querySelector(".menu__woman").classList.add("active");
});

document.querySelector("#close__woman-button").addEventListener("click", function () {
  document.querySelector(".menu__woman").classList.remove("active");
  document.querySelector(".menuGrey").classList.remove("animate");
  document.querySelector(".burger span").classList.remove("active");
  document.querySelector(".main__top-basket").classList.toggle("active");
});

document.querySelector("#menu__clothing").addEventListener("click", function () {
  document.querySelector(".menu__woman").classList.remove("animate");
  document.querySelector(".menu__clothing").classList.add("active");
});

document.querySelector(".menu__clothing-subHeaderTitle").addEventListener("click", function () {
  document.querySelector(".menu__clothing").classList.remove("active");
  document.querySelector(".burger span").classList.remove("active");
});

document.querySelector("#close__clothing-button").addEventListener("click", function (e) {
  document.querySelector(".menu__clothing").classList.remove("active");
  document.querySelector(".menu__woman").classList.toggle("active");
  document.querySelector(".menuGrey").classList.remove("animate");
  document.querySelector(".burger span").classList.remove("active");
  console.log(e)
});


// Mobile search 

document.querySelector(".main__top-searchButton").addEventListener("click", function (e) {
    e.preventDefault();
    const img = document.querySelector(".main__top-searchIcon");
    const width = document.documentElement.clientWidth;

    if (img.getAttribute('src').includes('search-icon.svg') && (width < 600)) {
        img.setAttribute("src", "./images/icons/search-close-icon.svg");
    } else {
        img.setAttribute("src", "./images/icons/search-icon.svg");
    }

    const input = document.querySelector(".main__top-input");
    if  (input && (width < 600)) {
        input.classList.toggle('main__top-inputActive');
    } 
});

// Mobile footer menu hide

document.querySelector(".footer__navigation").addEventListener("click", function (e) {
  if(e.target.nodeName === 'SPAN') {
    e.target.nextElementSibling.classList.toggle('footer__navigation-hide');
    e.target.lastElementChild.classList.toggle('footer__navigation-rotate');
  } 
});
