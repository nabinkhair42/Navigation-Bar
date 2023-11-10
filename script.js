document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const navList = document.querySelector(".nav-list");

    hamburgerIcon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});
