// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-open");

    if (navMenu.classList.contains("mobile-open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
        menuBtn.textContent = "☰";
    });
});


// ==============================
// FAQ
// ==============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(otherItem => {
            otherItem.classList.remove("active");
            otherItem.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });

});


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


// ==============================
// Navbar Background
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8, 5, 15, .92)";
    } else {
        navbar.style.background = "rgba(8, 5, 15, .72)";
    }

});


// ==============================
// Discord Buttons
// ==============================

const discordLink = "https://discord.gg/42VxAteANf";

document.querySelectorAll('a[href*="discord.gg"]').forEach(button => {

    button.addEventListener("click", () => {
        console.log("Joining MineShop Discord...");
    });

});