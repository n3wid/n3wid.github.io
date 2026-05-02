document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      
      // Open this item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Simple form submission handler
  const form = document.querySelector('.hero-form form');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci pour votre message ! Notre équipe vous contactera dans les plus brefs délais.');
      form.reset();
    });
  }
});
