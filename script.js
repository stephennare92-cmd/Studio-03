const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thank you. We’ll be in touch soon.";
  form.reset();
});
