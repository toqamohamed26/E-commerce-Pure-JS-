//form validation 
document.getElementById('submit').addEventListener('click',
  (e) => {
    e.preventDefault()
    let namePattern = (/^[A-Za-z\s]+$/);
    let emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
    let pswdPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let name_warning = document.querySelector('.name_warning')
    let email_warning = document.querySelector('.email_warning')
    let password_warning = document.querySelector('.password_warning')
    let alert = document.getElementById('alert')
    let Reset = document.getElementById("form");

    if (name.match(namePattern)) {
      name_warning.innerHTML = ""
    }
    if (email.match(emailPattern)) {
      email_warning.innerHTML = ""
    }
    if (password.match(pswdPattern)) {
      password_warning.innerHTML = ""
    }

    if (!name.match(namePattern)) {
      name_warning.innerHTML = '<i class="fa-solid fa-circle-exclamation "></i> Please Enter a valid name (only letters)'
    }
    if (!email.match(emailPattern)) {
      email_warning.innerHTML = '<i class="fa-solid fa-circle-exclamation "></i> Please Enter a valid Email (example12@example.com)'
    }
    if (!password.match(pswdPattern)) {
      password_warning.innerHTML = '<i class="fa-solid fa-circle-exclamation "></i> Password should be at least 8 characters mix of uppercase, lowercase and digits'
    }
    if (name != '' && email != '' && password != '') {
      alert.innerHTML = `<div class="alert alert-success mt-3">
    <strong>Success !</strong> Your info Submitted Successfly .
  </div>`
      Reset.reset()
    }
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
