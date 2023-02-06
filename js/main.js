const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");


  // open and close menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
  });


  // close the menu when the user clicks the nav links
  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      if (navMenu.classList.contains("nav__menu--open")) {
        navMenu.classList.remove("nav__menu--open");
      }
      changeIcon();
    });
  });

  //Change nav toggle icon 
  function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
      navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
      navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
  }

// Header scroll animation
window.addEventListener("scroll", ()=> {
  if(window.scrollY > 40) {
  header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: true,
});

sr.reval(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__infor-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .project__content, .footer__content", 
  {
  delay: 500,
  interval: 100,
});

sr.reveal("qualification__footer-text, . contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });