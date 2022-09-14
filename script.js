window.onscroll = function() {myFunction()};

var intro = document.querySelector("#intro")

function myFunction() {
  if (window.pageYOffset >= 100) {
    intro.style.display = "none"
  }
  else{
    intro.style.display = ""
  }
}