window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".sidebar__nav-link");
  const welcomeWindow = document.querySelector(".welcome-window");
  const hiddenWelcomeWindowClassName = "welcome-window--hidden";
  const promoBtn = document.querySelector(".welcome-window__btn");

  promoBtn.addEventListener("click", () => welcomeWindow.classList.add(hiddenWelcomeWindowClassName));

  navLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
      navLinks.forEach((link) => link.classList.remove("sidebar__nav-link--active"));
      link.classList.add("sidebar__nav-link--active");
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("content-section--active");
      });
      document.querySelectorAll(".content-section")[idx].classList.add("content-section--active");
    });
  });

  document.body.classList.remove("body--hidden");
});
