// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Scrollspy for active navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Smooth scrolling for navbar links
const navLinkElements = document.querySelectorAll('.nav-link');

navLinkElements.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const yOffset = -70; // adjust for navbar height
    const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth'
    });
  });
});

// Make navbar logo scroll to Home
const logo = document.querySelector('.navbar-brand .logo');
logo.addEventListener('click', function(e) {
  e.preventDefault();
  const targetSection = document.getElementById('home');
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
});

const projects = {
  1: {
    title: "Brand Identity System",
    desc: "Complete brand identity including logo, color palette, and typography guidelines",
    media: '<img src="images/project1.png" class="img-fluid" alt="Project 1">'
  },
  2: {
    title: "Typography Poster Series",
    desc: "Experimental typography posters exploring Gestalt principles and visual hierarchy",
    media: '<img src="images/project2.png" class="img-fluid" alt="Project 2">'
  }
};

const projectCards = document.querySelectorAll(".project-card");
const projectDisplay = document.getElementById("project-display");
const projectTitle = document.getElementById("project-title");
const projectDesc = document.getElementById("project-desc");
const projectMedia = document.getElementById("project-media");
const backBtn = document.getElementById("back-btn");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.project;
    const p = projects[id];
    projectTitle.innerText = p.title;
    projectDesc.innerText = p.desc;
    projectMedia.innerHTML = p.media;
    document.querySelector(".row.g-4").style.display = "none";
    projectDisplay.style.display = "block";
  });
});

backBtn.addEventListener("click", () => {
  projectDisplay.style.display = "none";
  document.querySelector(".row.g-4").style.display = "flex";
});
