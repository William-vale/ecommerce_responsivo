document.querySelector('.category-arrow.prev').addEventListener('click', function(e) {
    e.preventDefault() 
    const scroller = document.querySelector('.category-link');

    scroller.scrollLeft -= scroller.offsetWidth;
})
document.querySelector('.category-arrow.next').addEventListener('click', function(e) {
    e.preventDefault() 
    const scroller = document.querySelector('.category-link');

    scroller.scrollLeft += scroller.offsetWidth;
})

document.querySelector('.category-link').addEventListener('scroll', function() {
    document.querySelector('.category-arrow.prev').classList.toggle('hidden', this.scrollLeft < 24)
    document.querySelector('.category-arrow.next').classList.toggle('hidden', this.scrollLeft > this.offsetWidth - 24)
})