// Add scroll animation for the navigation bar
document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navBar.style.background = "#222"; // Darker background on scroll
            navBar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        } else {
            navBar.style.background = "#333"; // Original background
            navBar.style.boxShadow = "none";
        }
    });
});
