document.querySelector('.topbar-translate-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if(!e.target.matches('.topbar-translate, .topbar-translate *')) {
        document.querySelector('.topbar-translate-dropdown').classList.remove('active');
    }
});