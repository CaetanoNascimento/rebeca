/*let menuIcon = document.querySelector('#menu-icon');
console.log(menuIcon)
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =  sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*='+ id + ']').classList.add(active)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
*/
function myFunction() {
    var x = document.getElementById("navis");
    if (x.className === "navbar") {
      x.classList.add('active')  ;
    } else {
      x.classList.remove('active');
    }
  }

  function scrolldown() {
    console.log('down')
    window.scrollTo(0, 800);
  }

  function reveal() {
    console.log('brota na base')
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  