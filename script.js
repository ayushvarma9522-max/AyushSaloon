
// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
let hairPhoto = document.querySelector("#hairphoto");


hairPhoto.addEventListener("click" ,()=>{

    console.log("photo");
})

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Welcome message

console.log("Welcome to Ayush Verma Salon Website 💈");