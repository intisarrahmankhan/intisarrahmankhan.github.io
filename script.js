// Initialize Animations (AOS)
AOS.init({ duration: 800, once: true });

// Scrollspy (Updates sidebar active link)
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 250)) {
            current = section.getAttribute("id");
        }
    });

    if (window.scrollY < 100) current = "about";

    document.querySelectorAll(".nav-links a").forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
});

// Theme Toggle Function
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        html.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}
