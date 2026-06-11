// IMAGE SLIDER
const images = [
  "assets/images/watch1.jpg",
  "assets/images/watch2.jpg",
  "assets/images/watch3.jpg",
  "assets/images/watch4.jpg",
  "assets/images/watch5.jpg",
  "assets/images/watch6.jpg"
];

let index = 0;
const sliderImg = document.getElementById("slider-img");

function next() {
  index = (index + 1) % images.length;
  sliderImg.src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  sliderImg.src = images[index];
}

let slideInterval = setInterval(next, 4000);

sliderImg.addEventListener("mouseenter", () => clearInterval(slideInterval));
sliderImg.addEventListener("mouseleave", () => {
  slideInterval = setInterval(next, 4000);
});

// GSAP ANIMATIONS

if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero h1", {
    opacity: 0,
    y: 50,
    duration: 1
  });

    gsap.from(".card", {
    scrollTrigger: {
      trigger: ".cards",
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2
  });

   gsap.from(".partner-card", {
    scrollTrigger: {
      trigger: ".partners",
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2
  });

  // Counter animation (on scroll)
  gsap.from(".counter", {
    scrollTrigger: {
      trigger: ".stats",
      start: "top 80%"
    },
    onEnter: () => {
      document.querySelectorAll(".counter").forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCount = () => {
          let increment = target / 100;

          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    }
  });

  // Parallax 
  gsap.to(".hero video", {
    y: 100,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
}


// STICKY HEADER (Optimized)
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY - lastScroll > 10) {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
    lastScroll = window.scrollY;
  }
});

// MOBILE MENU
function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

// SMOOTH SCROLL (Explore)
const exploreBtn = document.querySelector(".explore-btn");

if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#collection").scrollIntoView({
      behavior: "smooth"
    });
  });
}

