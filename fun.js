/*-----------------------------------------------------------------------------
                            Toggle Nav Bar
-------------------------------------------------------------------------------*/
const navToggler = document.querySelector(".nav-toggler"),
  myNav = document.querySelector(".nav"),
  mySpan = document.querySelector(".nav-toggler span");

function navBarToggle() {
  myNav.classList.toggle("open");
  navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", navBarToggle);

/*-----------------------------------------------------------------------------
                            Close Nav Bar When Click On Nav-item
-------------------------------------------------------------------------------*/

document.addEventListener("click", function closeNave(e) {
  if (e.target.closest(".nav-item")) {
    navBarToggle();
  }
});


/*-----------------------------------------------------------------------------
                            Sticky Nav Bar When Scroll
-------------------------------------------------------------------------------*/
const myHeader = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (this.pageYOffset > 60) {
    myHeader.classList.add("sticky");
  } else {
    myHeader.classList.remove("sticky");
  }
});

/*-----------------------------------------------------------------------------
                            Menu Tabs
-------------------------------------------------------------------------------*/
const menTab = document.querySelector(".menu-tabs");

menTab.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");
    menTab.querySelector(".menu-tab-item.active").classList.remove("active");
    e.target.classList.add("active");

    const menuSection = document.querySelector(".menu-section");

    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");

    menuSection.querySelector(target).classList.add("active");
  }
});
