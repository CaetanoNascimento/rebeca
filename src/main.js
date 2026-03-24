import './scrollme.css'
import './style.css'

// Mobile menu toggle
function myFunction() {
  const x = document.getElementById('navis')
  if (x.className === 'navbar') {
    x.classList.add('active')
  } else {
    x.classList.remove('active')
  }
}

// Scroll reveal
function reveal() {
  const reveals = document.querySelectorAll('.reveal')
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight
    const elementTop = el.getBoundingClientRect().top
    const elementVisible = 150
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', reveal)
window.myFunction = myFunction
