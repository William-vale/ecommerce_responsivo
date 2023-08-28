document.querySelector('.product-arrow.prev').addEventListener('click', function () {
    const scroller = document.querySelector('.product-grid-scroller')
    scroller.scrollLeft -= scroller.offsetWidth
});
document.querySelector('.product-arrow.next').addEventListener('click', function () {
    const scroller = document.querySelector('.product-grid-scroller')
    scroller.scrollLeft += scroller.offsetWidth
});

document.querySelector('.product-grid-scroller').addEventListener('scroll', function() {
    document.querySelector('.product-arrow.prev').classList.toggle('hidden', this.scrollLeft < 16);
    document.querySelector('.product-arrow.next').classList.toggle('hidden', this.scrollLeft > this.scrollWidth - this.offsetWdth - 16);
});

var botao1 = document.querySelector('.btn1');
var botao2 = document.querySelector('.btn2');
var botao3 = document.querySelector('.btn3');

var item1 = document.querySelector('.btn-item1');
var item2 = document.querySelector('.btn-item2');
var item3 = document.querySelector('.btn-item3');

botao1.addEventListener('click', function() {
    botao1.classList.add("active");
    botao2.classList.remove('active');
    botao3.classList.remove('active');

    item1.classList.add('shown');
    item2.classList.remove('shown');
    item3.classList.remove('shown');
});

botao2.addEventListener('click', function() {
    botao2.classList.add("active");
    botao1.classList.remove('active');
    botao3.classList.remove('active');

    item2.classList.add('shown');
    item1.classList.remove('shown');
    item3.classList.remove('shown');
});

botao3.addEventListener('click', function() {
    botao3.classList.add('active');
    botao1.classList.remove('active');
    botao2.classList.remove('active');

    item3.classList.add('shown');
    item2.classList.remove('shown');
    item1.classList.remove('shown');
});
