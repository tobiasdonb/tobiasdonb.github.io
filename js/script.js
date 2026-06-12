// toggle class active
const MenuBar = document.querySelector("#menu");
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diklik
MenuBar.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// klik luar menu
const Menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  navbarNav.classList.remove("menu-active");
});

// Photography Slider
const photoTrack = document.getElementById('photoTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (photoTrack && prevBtn && nextBtn) {
  let currentIndex = 0;
  const items = photoTrack.children;
  const totalItems = items.length;

  const getItemsPerView = () => window.innerWidth <= 768 ? 1 : 2;

  const updateSlider = () => {
    const itemsPerView = getItemsPerView();
    const totalPages = Math.ceil(totalItems / itemsPerView);
    if (currentIndex >= totalPages) currentIndex = totalPages - 1;
    if (currentIndex < 0) currentIndex = 0;

    const percentage = -(currentIndex * 100);
    photoTrack.style.transform = `translateX(${percentage}%)`;

    // Hide/show buttons based on bounds
    if (currentIndex === 0) {
      prevBtn.classList.add('hidden');
    } else {
      prevBtn.classList.remove('hidden');
    }

    if (currentIndex >= totalPages - 1) {
      nextBtn.classList.add('hidden');
    } else {
      nextBtn.classList.remove('hidden');
    }
  };

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
  });

  window.addEventListener('resize', () => {
    currentIndex = 0;
    updateSlider();
  });

  updateSlider();
}
