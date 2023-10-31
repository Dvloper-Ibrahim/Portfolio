// Scrolling from linke in NavBar
let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll(".navbar .navbar-nav .nav-link");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

function removeActiveLink() {
  navbarLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

navbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    removeActiveLink();
    e.target.classList.add("active");
  });
});

// ===============================================================
// For sending me email with subject and Message

let mailSubject = document.getElementById("mail-subject");
let mailMessage = document.getElementById("mail-msg");
let sendEmail = document.getElementById("email-me");

sendEmail.addEventListener("click", function (e) {
  e.target.href += `?subject=${mailSubject.value}&body=${mailMessage.value}.`;
});
// =====================================================
// Scroll To Top Button
const scrollToTop = document.querySelector(".rowup");
document.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const viewportHeight = window.innerHeight;

  if (scrollPos > viewportHeight / 2) {
    scrollToTop.classList.add("visible");
  } else {
    scrollToTop.classList.remove("visible");
  }
});
