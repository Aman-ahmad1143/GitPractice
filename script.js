document.addEventListener('DOMContentLoaded', function() {
    // Color change functionality
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colors = ['#f4f4f4', '#e8f5e8', '#fff0e6', '#f0f8ff', '#fff5f5'];
    let colorIndex = 0;

    changeColorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });

    // Form handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;

        // Simple form validation
        if (name && email && message) {
            formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
            formMessage.className = 'success';
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 3 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 3000);
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
