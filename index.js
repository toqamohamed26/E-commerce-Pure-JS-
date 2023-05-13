//counter 
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

//slider
var arr = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"];
var slider = document.getElementsByClassName("slider")[0];
var index = 0;
var interval;
function forward() {
  index++;
  show();
}
function show() {
  if (index > arr.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = arr.length - 1;
  }
  slider.style.backgroundImage = `url('./images/${arr[index]}')`;
}
function Play() {
  interval = setInterval(function () {
    forward();
  }, 1000)
}
Play()


//Filter products
let btns = document.querySelectorAll("#myBtnContainer button")
let All = document.querySelectorAll('.All')
btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    All.forEach((el2) => {
      el2.style.display = 'none';
    })
    document.querySelectorAll(e.target.dataset.filter).forEach((button) => {
      button.style.display = 'block';
      console.log(button)
    })
  })
})


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
