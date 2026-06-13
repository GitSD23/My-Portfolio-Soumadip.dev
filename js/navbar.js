const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

const overlay =
    document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navLinks.classList.toggle("active");

    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    hamburger.classList.remove("active");

    navLinks.classList.remove("active");

    overlay.classList.remove("active");

});

document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");

            navLinks.classList.remove("active");

            overlay.classList.remove("active");

        });

    });

document.querySelector('.nav-menu a[href="#home"]')?.classList.add("active");