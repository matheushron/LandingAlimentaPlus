window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var links = document.querySelectorAll(".nav-link");
var loginText = document.querySelector(".LoginText")
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    links.forEach(item => {
      item.classList.add("change-color")
    })
    loginText.classList.add("change-color")
  } else {
    header.classList.remove("sticky");
    links.forEach(item => {
      item.classList.remove("change-color")
    })
    loginText.classList.remove("change-color")
  }
}