// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

    // Collect expertise checklist values
    const expertise = [];
    if (document.getElementById('hr').checked) expertise.push('Human Resource');
    if (document.getElementById('pm').checked) expertise.push('Project Management');
    if (document.getElementById('da').checked) expertise.push('Data Analyst');
    if (document.getElementById('cybersecurity').checked) expertise.push('Cybersecurity');

    
    // Store data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    localStorage.setItem('contactMethod', contactMethod);
    localStorage.setItem('expertise', JSON.stringify(expertise));
    

    alert('Form submitted and data stored in local storage!');
});

// Clear local storage when the form is reset
document.getElementById('contactForm').addEventListener('reset', function() {
    localStorage.clear();
    alert('Form cleared and local storage cleared!');
});
