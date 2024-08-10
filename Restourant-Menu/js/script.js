const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

// Buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

// Click event listeners
document.addEventListener("click", function(e) {
    if (searchForm.classList.contains("active") && !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)) {
        searchForm.classList.remove("active");
    }

    if (cartItem.classList.contains("active") && !e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)) {
        cartItem.classList.remove("active");
    }

    if (navbar.classList.contains("active") && !e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)) {
        navbar.classList.remove("active");
    }
});

// Button event listeners
searchBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    searchForm.classList.toggle("active");
});

cartBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    cartItem.classList.toggle("active");
});

menuBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    navbar.classList.toggle("active");
});
