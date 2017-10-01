
document.addEventListener('DOMContentLoaded', function () {

    function hideMenu() {
        $('#aside-menu').css('visibility', 'hidden');
        $('#myCarousel').css('display', 'none');
        document.getElementById('category').addEventListener('mouseover', function () {
            $('#aside-menu').css('visibility', 'visible')
        });
        document.getElementById('category').addEventListener('mouseleave', function () {
            $('#aside-menu').css('visibility', 'hidden')
        })
        $('#aside-menu').on('mouseover', function () {
            $('#aside-menu').css('visibility', 'visible');
        })
        $('#aside-menu').on('mouseleave', function () {
            Array.prototype.forEach.call(document.getElementsByClassName('menu'), function (x) {
                if (x.style.display == 'inline-block') {
                    $('#aside-menu').css('visibility', 'visible');
                } else {
                    $('#aside-menu').css('visibility', 'hidden');
                }
            });

        })

    }
    getProducts().then(function (products) {
        var productsL = [];
        var pr = [];
        productsList._productList = Array.prototype.slice.call(products.products, 0);
        productsL = Array.prototype.slice.call(products.products, 0);
        pr = filterType(productsL, 'phone')
        console.log(pr);
        function router() {
            var page = location.hash.slice(1);

            switch (page) {
                case 'home':
                    homeController();
                    break;
                case 'phone':
                    hideMenu();
                    phoneController();
                    break;
                case 'tablet':
                    hideMenu();
                    tabletController();
                    break;
                case 'toys':
                    hideMenu();
                    toysController();
                    break;
                     case 'men':
                    hideMenu();
                    menController();
                    break;
                case 'women':
                    hideMenu();
                    womenController();
                    break;
                case 'camera':
                    hideMenu();
                    cameraController();
                    break;
                    
                default:
                    break;
            }
        }
        function homeController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/homeTemplate.htm');
        }
        function phoneController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterType(productsL, 'phone'))
        }
        function tabletController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterType(productsL, 'tablet'))
        }
        function tvController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterType(productsL, 'tv'))
        }
         function toysController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterType(productsL, 'toys'))
        }
         function menController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterType(productsL, 'men'))
        }
         function womenController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterType(productsL, 'women'))
        }
         function cameraController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterType(productsL, 'camera'))
        }

        window.addEventListener('hashchange', router);
        router();
    }).catch(function (data) {
        console.log(data);
    });



})
function loadTemplate(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            resolve(xhr.responseText);
        }
        xhr.send(null);
    });

}
function putTemplate(templateUrl, products) {
    if (arguments.length == 1) {
        loadTemplate(templateUrl).then(function (templateText) {
            var templateFunc = Handlebars.compile(templateText);
            var container = document.querySelector('main');
            container.innerHTML = templateFunc({});
        });
    } else {
        loadTemplate(templateUrl).then(function (templateText) {
            var templateFunc = Handlebars.compile(templateText);
            var container = document.querySelector('main');
            console.log(document.querySelector('main'))
            container.innerHTML = templateFunc({ productsList: products });
        });
    }

}


function filterType(products, val) {
    var prod = products.filter(pr => pr.type == val);
    console.log(products);
    return prod;
}