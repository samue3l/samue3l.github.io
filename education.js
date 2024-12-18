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
// Function to resize text
function resizeText(size) {
    if (size === 'larger') {
        document.body.style.fontSize = '1.5em';
    } else if (size === 'default') {
        document.body.style.fontSize = '1em';
    }
}

// Function to toggle colorblind-friendly mode
function toggleColorMode() {
    const body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#FFFFFF';
        body.style.color = '#333333';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}