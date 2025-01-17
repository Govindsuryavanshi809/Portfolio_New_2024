let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("ri-close-fill");
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section'); 
let navlinks = document.querySelectorAll('header nav a'); 


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + hight) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
  
let darkModeIcon = document.querySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("ri-sun-fill");
    document.body.classList.toggle('dark-mode')
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay : 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img ', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content ', { origin: 'right' });







// E-mail verification .....................

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "govindsuryavanshi9589@gmail.com",
        Password : "govind@123",
        To : 'govindsuryavanshi9589@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New ContacT! Please Contact Us",
        Body: "Name" + document.getElementById("name").value
        +"<br> Email:" + document.getElementById("email").value
        +"<br> phone no:" + document.getElementById("phone").value
        +"<br> message:" + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfuly")
    );
}