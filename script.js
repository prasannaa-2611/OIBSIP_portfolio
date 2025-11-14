// Highlight active nav item while scrolling
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 200) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});