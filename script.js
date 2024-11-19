// Project Filter
document.addEventListener('DOMContentLoaded', () => {
    const projectFilterButtons = document.querySelectorAll('#project-filter button');
    const projectCards = document.querySelectorAll('.project-card');
  
    projectFilterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        projectCards.forEach(card => {
          card.style.display = filter === 'all' || card.classList.contains(filter) ? 'block' : 'none';
        });
  
        projectFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });
  
  // Contact Form Validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Your message has been sent successfully!');
    this.reset();
  });
  
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
