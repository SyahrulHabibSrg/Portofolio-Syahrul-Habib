window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    if (window.scrollY > 50) { 
        navbar.classList.add('navbar-scrolled');
        body.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('navbar-scrolled');
        body.classList.remove('scrolled');
    }
});

document.querySelector(".search-button").addEventListener("click", function (e) {
    e.preventDefault();
    const searchInput = document.querySelector(".search-input");
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
        searchInput.focus();
    } else {
        searchInput.style.display = "none";
    }
});
