
(function () {
    let i = 0
    function heroAnimate() {
        const heroImages = document.querySelectorAll('.hero-image') 
        const heroItems = document.querySelectorAll('.hero-item') 

        if(heroImages.length !== heroItems.length) return 

        heroImages.forEach(function(el) {
            el.classList.remove('active');
        })
        heroItems.forEach(function(el) {
            el.classList.remove('active');
        })
        heroImages[i].classList.add('active')
        heroItems[i].classList.add('active')
        
        i++;

        if(i >= heroImages.length){
            i=0;
        }

        setTimeout(function() {
            requestAnimationFrame(heroAnimate)
        }, 10000)
    }

    heroAnimate();
})();

