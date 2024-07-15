    // document.addEventListener('DOMContentLoaded', function() {
//   const reveals = document.querySelectorAll('.reveal');

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('active');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.1 });

//   reveals.forEach(reveal => {
//     observer.observe(reveal);
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
    const Menu = document.getElementById('menu');
    const navLinks = document.getElementById('link');
  
    Menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });
  
    reveals.forEach(reveal => {
      observer.observe(reveal);
    });
  });
  
  
  document.querySelector('.menu').addEventListener('click', function() {
    const links = document.querySelector('.link');
    links.classList.toggle('active');
});
  