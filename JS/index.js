const navbar = document.querySelector(".navbar");
const logo = document.getElementById("logo");
const linkColor = document.querySelectorAll(".link-color");
const nav_btn = document.getElementById("nav-btn")

window.onscroll = () => {
    const isScrolled = window.scrollY > 20;

    // Toggle the 'sticky' class for the navbar
    navbar.classList.toggle("sticky", isScrolled);

    // Toggle the 'color' class for each link element
    linkColor.forEach(link => link.classList.toggle("color", isScrolled));

    // Change the logo source based on the scroll position
    logo.src = isScrolled ? "./images/white-logo.png" : "./images/black-logo.png";

    nav_btn.classList.toggle("change", isScrolled);
};

function openNav() {
    document.getElementById("myNav").style.width = "70%";
  }
  
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



