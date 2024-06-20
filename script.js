function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  const sections = document.querySelectorAll('.reveal-up'); // Select all sections with reveal-up class

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Add 'in-view' class when section enters viewport
        } else {
            entry.target.classList.remove('in-view'); // Remove 'in-view' class when section leaves viewport
        }
    });
}, {
    threshold: 0.5 // Observe sections when 50% or more of their height is visible
});

sections.forEach((section) => observer.observe(section)); // Observe each section
