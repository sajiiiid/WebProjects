// Data structure for easy updates
const projects = [
    {
        title: "2D Co-op Adventure Game",
        description: "A collaborative puzzle-platformer inspired by Fireboy & Watergirl. Implemented with Java, focusing on synchronized mechanics and character-specific abilities.",
        tech: ["Java", "OOP", "Design Patterns"],
        link: "https://github.com",
        status: "Work in Progress"
    },
    {
        title: "System CLI Tools",
        description: "A collection of Python and Bash scripts for Linux automation, system monitoring, and architecture exploration. Optimized for Arch Linux.",
        tech: ["Python", "Bash", "Linux"],
        link: "https://github.com",
        status: "Completed"
    },
    {
        title: "Portfolio v2",
        description: "A professional engineering portfolio designed with a focus on minimalism, performance, and clean architecture principles.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: "https://github.com",
        status: "Completed"
    }
];

// Function to render projects dynamically
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-info">
                <div class="project-tags">
                    ${project.tech.map(t => `<span>#${t}</span>`).join('')}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-footer">
                    <a href="${project.link}" class="project-link" target="_blank">View Source <i class="fas fa-arrow-right"></i></a>
                    <span class="project-status">${project.status}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once it's revealed, we don't need to observe it anymore
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initMobileMenu();
    initScrollReveal();
});
