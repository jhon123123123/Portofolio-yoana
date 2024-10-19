const typed = new Typed('.multiple-text',{
  strings: ['Web Developer', 'Web Designer',],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop: true
});


const text = "MySkills";
        const typingElement = document.querySelector('.heading');
        let index = 0;

        function type() {
            typingElement.textContent += text.charAt(index);
            index++;
            
            if (index === text.length) {
                // Jika sudah selesai mengetik, tunggu sejenak sebelum menghapus
                setTimeout(() => {
                    index = 0; // Reset index
                    typingElement.textContent = ''; // Kosongkan teks
                    type(); // Mulai mengetik ulang
                }, 2000); // Tunggu 1 detik sebelum mulai ulang
            } else {
                setTimeout(type, 100); // Ganti 100 dengan kecepatan yang diinginkan (dalam ms)
            }
        }

        type();


        

        window.addEventListener('scroll', () => {
          const footer = document.querySelector('.footer');
          if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
              footer.classList.add('scrolled');
          } else {
              footer.classList.remove('scrolled');
          }
      });
// Scroll to Top button functionality
const scrollToTopButton = document.getElementById('scrollToTop');

// Show button when scrolled down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Tampilkan tombol jika sudah menggulir lebih dari 200px
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Tambahkan efek halus saat menggulir ke atas
    });
});
      

/* srol reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'bottom' });


