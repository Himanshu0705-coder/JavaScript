// ```

// **`script.js`**
// ```javascript
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const progressBar = document.querySelector(".scroll-progress");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

  document.body.style.overflow = isOpen ? "hidden" : "";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.style.overflow = "";
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

  progressBar.style.width = `${progress}%`;
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category;

      if (selectedFilter === "all" || categories.includes(selectedFilter)) {
        card.classList.remove("is-hidden");
      } else {
        card.classList.add("is-hidden");
      }
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");

  formStatus.textContent = `Thanks, ${name}. Your message is ready to send.`;
  contactForm.reset();
});

document.querySelectorAll(".project-visual, .hero-art").forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    const bounds = element.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;

    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
  });

  element.addEventListener("mouseleave", () => {
    element.style.setProperty("--mouse-x", "0px");
    element.style.setProperty("--mouse-y", "0px");
  });
});
// ```

// Open `index.html` in a browser to run it. Replace the sample name, project descriptions, email address, and social links with your own details.