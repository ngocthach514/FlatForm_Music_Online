const sidebarToggle = document.querySelector("#sidebar-toggle");
var toggle = false;
sidebarToggle.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
  if (toggle) {
    sidebarToggle.childNodes[1].classList.remove("fa-angle-right");
    sidebarToggle.childNodes[1].classList.add("fa-angle-left");
  } else {
    sidebarToggle.childNodes[1].classList.remove("fa-angle-left");
    sidebarToggle.childNodes[1].classList.add("fa-angle-right");
  }
  toggle = !toggle;
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorage();
  toggleRootClass();
});

function toggleRootClass() {
  const current = document.documentElement.getAttribute("data-bs-theme");
  const inverted = current == "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-bs-theme", inverted);
}

function toggleLocalStorage() {
  if (isLight()) {
    localStorage.removeItem("light");
  } else {
    localStorage.setItem("light", "set");
  }
}

function isLight() {
  return localStorage.getItem("light");
}

if (isLight()) {
  toggleRootClass();
}

// SCROLL CONTENTS BODY
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       $(".navbar").addClass("nav_scroll");
//     } else {
//       $(".navbar").removeClass("nav_scroll");
//     }
//   });
// });

// const tooltipTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="tooltip"]'
// );
// const tooltipList = [...tooltipTriggerList].map(
//   (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
// );

// VOLUME


