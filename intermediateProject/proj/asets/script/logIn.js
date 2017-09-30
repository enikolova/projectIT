document.addEventListener('DOMContentLoaded', function () {
    var acc = document.querySelector('#login_div');
    var children = acc.children;
    var log = document.querySelector('#log');


    children[0].addEventListener('mouseover', function (event) {
        log.style.display = 'inline-block';


    });
    children[0].addEventListener('mouseleave', function () {
        log.style.display = 'none';
        
    })
    log.addEventListener('mouseover', function () {
        log.style.display = 'inline-block';
    });
    log.addEventListener('mouseleave', function () {
        log.style.display = 'none'
    });

    var fav = document.querySelector('#favorite');

    fav.addEventListener('mouseleave', function () {
        fav.style.display = 'none';
    })
    fav.addEventListener('mouseover', function () {
        fav.style.display = 'inline-block';
    })
    children[1].addEventListener('mouseover', function (event) {
        fav.style.display = 'inline-block';

    });
    children[1].addEventListener('mouseleave', function () {
        fav.style.display = 'none';
    })
    var cart = document.querySelector('#cart');
    cart.addEventListener('mouseover', function () {
        cart.style.display = 'inline-block';
    })
    cart.addEventListener('mouseleave', function () {
        cart.style.display = 'none';
    })
    children[2].addEventListener('mouseover', function (event) {
        cart.style.display = 'inline-block';

    });
    children[2].addEventListener('mouseleave', function () {
        cart.style.display = 'none';
    })

})