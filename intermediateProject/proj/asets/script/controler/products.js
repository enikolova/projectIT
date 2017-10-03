
document.addEventListener('DOMContentLoaded', function () {

    function hideMenu() {
        $('#aside-menu').css('visibility', 'hidden');
        $('.menu').css('display', 'none');
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
            $('#aside-menu').css('visibility', 'hidden')
        })
        $('.menu').on('mouseover', function () {
            $('#aside-menu').css('visibility', 'visible');

        })
        $('.menu').on('mouseleave', function () {
            $('#aside-menu').css('visibility', 'hidden');


        })
    };
    getProducts().then(function (products) {
        var productsL = [];
        var pr = [];
        productsList._productList = Array.prototype.slice.call(products.products, 0);
        productsL = Array.prototype.slice.call(products.products, 0);
        console.log(filterCompany(productsL,'phone'));
        function router() {
            var page = location.hash.slice(1);

            switch (page) {
                case 'home':
                    homeController();
                    break;
                case 'phone': {
                    hideMenu();
                    phoneController();
                }
                    break;
                case 'tablet':
                    {
                        hideMenu();
                        tabletController();
                    }
                    break;
                case 'toys':
                    {
                        hideMenu();
                        toysController();
                    }
                    break;
                case 'men':
                    {
                        hideMenu();
                        menController();
                    }
                    break;
                case 'women':
                    {

                        hideMenu();
                        womenController();
                    }
                    break;
                case 'camera':
                    {
                        hideMenu();
                        cameraController();
                    }
                    break;
                case "tv":
                    {
                        hideMenu();
                        tvController();
                    }
            }
        }
        function homeController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/homeTemplate.htm');
        }
        function phoneController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterProducts(productsL, 'phone', 'type'))
        }
        function tabletController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterProducts(productsL, 'tablet', 'type'))
        }
        function tvController() {
            console.log("hop");
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterProducts(productsL, 'tv', 'type'))
        }
        function toysController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterProducts(productsL, 'toys', 'type'))
        }
        function menController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterProducts(productsL, 'men', 'type'))
        }
        function womenController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterProducts(productsL, 'women', 'type'))
        }
        function cameraController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterProducts(productsL, 'camera', 'type'))
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


function filterProducts(products, val, type) {
    var prod = products.filter(pr => pr[type] == val);
    return prod;
}

function filterCompany(products, val) {
    var companies=[];
    var prod = filterProducts(products, val,'type');
    console.log(prod);
    prod.forEach(function(element) {
        if(!(companies.some(comp=>comp==element.companyName))){
            companies.push(element.companyName);
        }
    });
    return companies;
}

