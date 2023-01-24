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