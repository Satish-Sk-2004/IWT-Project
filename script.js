document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Animations using GSAP
    gsap.from("#home h1", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
    gsap.from("#home p", { opacity: 0, y: 50, duration: 1, ease: "power3.out", delay: 0.5 });
    
    gsap.from("#faculty h2", { opacity: 0, scale: 0.8, duration: 1, ease: "power3.out", scrollTrigger: "#faculty h2" });
    gsap.from(".faculty-card", { opacity: 0, y: 50, stagger: 0.2, duration: 0.8, ease: "power3.out", scrollTrigger: ".faculty-card" });
    
    gsap.from("#about h2", { opacity: 0, x: -100, duration: 1, ease: "power3.out", scrollTrigger: "#about h2" });
    gsap.from("#about p", { opacity: 0, x: 100, duration: 1, ease: "power3.out", scrollTrigger: "#about p" });
    
    gsap.from("#faq h2", { opacity: 0, y: -50, duration: 1, ease: "power3.out", scrollTrigger: "#faq h2" });
    gsap.from(".faq-item", { opacity: 0, x: -50, duration: 1, ease: "power3.out", stagger: 0.2, scrollTrigger: ".faq-item" });
    
    gsap.from(".contact-info div", { opacity: 0, y: 50, duration: 1, ease: "power3.out", stagger: 0.2, scrollTrigger: ".contact-info" });
    gsap.from(".contact-form", { opacity: 0, x: -100, duration: 1, ease: "power3.out", scrollTrigger: ".contact-form" });
});
