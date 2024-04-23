let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let footer = document.querySelector('.footer');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
        
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidePerView: 1,
        },
        768:{
            slidePerView: 2,
        },
        1024:{
            slidePerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    breakpoints:{
        450:{
            slidePerView: 2,
        },
        768:{
          slidePerView: 3,
        },
        991:{
            slidePerView:4,
        },
        1200:{
          slidePerView: 5,
        },
    },
});


// ====================================contact section  start====================//

 // Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to handle form submission
function sendEmail() {
    // Get form inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate email
    if (!validateEmail(email)) {
        alert("Please provide a valid email address");
        return;
    }

    // Construct email body
    const body = `Name: ${name}\nEmail: ${email} \nSubject: ${subject}\nMessage: ${message}`;

    // Compose email link
    const mailtoLink = `mailto:mannuarya2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailtoLink;
}

// Attach form submission function to the button click event
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default button behavior
    sendEmail(); // Call function to send email
});


// contact section   end====================//


