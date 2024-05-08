
// ------------------Toggle Button---------

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "100%";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}



// ------------------Scroll Reveal---------
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".title h1", {
    ...scrollRevealOption,
    origin: "bottom",
});

ScrollReveal().reveal(".hero-content h2, .hero-content p", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
});
ScrollReveal().reveal(".cta-button", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1000,
});
ScrollReveal().reveal(".about-content", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about-image", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
    distance: "200px",
});
ScrollReveal().reveal(".product-card", {
    ...scrollRevealOption,
    interval: 300, 
});

ScrollReveal().reveal(".service-wrapper", {
    ...scrollRevealOption,
    // delay: 500,
    origin: "top",
});

ScrollReveal().reveal(".service-card", {
    ...scrollRevealOption,
    interval: 200, 
    origin: "top",
});
ScrollReveal().reveal(".contact-info", {
    ...scrollRevealOption,
//   delay: 500,
    origin: "left",
});
ScrollReveal().reveal(".contact-form", {
    ...scrollRevealOption,
  delay: 500,
    origin: "right",
});

ScrollReveal().reveal(".branch", {
    ...scrollRevealOption,
    interval: 500, 
    origin: "top",
});

// -------------Categories Section-----------

ScrollReveal().reveal(".category h3", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".holder", {
    ...scrollRevealOption,
    delay: 500,
    interval: 300, 
    origin: "top",
});

ScrollReveal().reveal(".seemore-link", {
    ...scrollRevealOption,
    delay: 1500,
    origin: "bottom",
});


// -------------Visiting Cards Page-----------

ScrollReveal().reveal(".banner-text h2", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".banner-image", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
});
ScrollReveal().reveal(".main-container", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1000,
});

