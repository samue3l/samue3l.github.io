document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");

  // Add animation class to contact section after page loads
  setTimeout(() => {
    contactSection.classList.add("animate");
  }, 300); // Delay for better visual effect
});
