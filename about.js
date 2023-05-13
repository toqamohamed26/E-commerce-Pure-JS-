//scrolling top btn & Fixed navbar 
let mybutton = document.getElementById("myBtn");
var navbar = document.querySelector('nav')
window.onscroll = function () {
  scrollFunction()
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//// counter
const totalCount = document.getElementById("counter");
var count = window.localStorage.getItem('Cart_items') ||0;
totalCount.innerHTML = count
let handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
  localStorage.setItem("Cart_items", count);
};
const incrementCount = document.querySelectorAll(".cart-icon");
incrementCount.forEach((c) => {
  c.addEventListener("click", handleIncrement);
})
