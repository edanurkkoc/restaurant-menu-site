const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
// const navbar = document.querySelector(".navbar");

// Buttons
const searchBtn = document.querySelector("#search-btn");


// Click event listeners
document.addEventListener("click", function(e) {
    if (searchForm.classList.contains("active") && !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)) {
        searchForm.classList.remove("active");
    }

  
});
const cartBtn = document.getElementById('cart-btn');
const cartContainer = document.querySelector('.cart-items-container');

cartBtn.addEventListener('click', () => {
    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
        cartContainer.style.display = 'block'; // Göster
    } else {
        cartContainer.style.display = 'none'; // Gizle
    }
});
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block'; 
    } else {
        navbar.style.display = 'none'; 
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

