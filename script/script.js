// const navEl = document.querySelector(".nav");
// const hamburgerEl = document.querySelector(".hamburger");

// hamburgerEl.addEventListener("click", () => {
//     // toggle allows for navbar to be closed after opening (onclick)
//     navEl.classList.toggle("nav--open");
//     hamburgerEl.classList.toggle("hamburger--open");
// });

// navEl.addEventListener("click", () => {
//     // toggle allows for navbar to be closed after opening (onclick)
//     navEl.classList.remove("nav--open");
//     hamburgerEl.classList.remove("hamburger--open");
// });


//lightbox
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}