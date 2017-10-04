
document.addEventListener('DOMContentLoaded', function () {

    function skrii() {
        $('#aside-menu').css({ 'display': 'none', 'position': 'static' })
    }
    function pokaji() {
        $('#aside-menu').css({
            'display': 'flex',
            'position': 'absolute'
        })
    }
    function hideMenu() {
        $('#aside-menu').css('display', 'none');
        $('.menu').css('display', 'none');
        $('#myCarousel').css('display', 'none');
        document.getElementById('category').addEventListener('mouseover', pokaji);
        document.getElementById('category').addEventListener('mouseleave', skrii)
        // $("#category").on(('mouseover', pokaji));
        // $("#category").on(('mouseleave', skrii));
        $('#aside-menu').on('mouseover', pokaji)
        $('#aside-menu').on('mouseleave', skrii)
        $('.menu').on('mouseover', pokaji)
        $('.menu').on('mouseleave', skrii)
    };

    function showMenu() {
        $('#aside-menu').css({ 'display': 'flex', 'position': 'static' })
        $('#myCarousel').css('display', 'inline-block');
        // $('#aside-menu').css('display', 'none');
        // $('.menu').css('display', 'none');
        // $('#myCarousel').css('display', 'none');
        document.getElementById('category').removeEventListener('mouseover', pokaji);
        document.getElementById('category').removeEventListener('mouseleave', skrii)
        $('#aside-menu').off('mouseover', pokaji)
        $('#aside-menu').off('mouseleave', skrii)
        $('.menu').off('mouseover', pokaji)
        //     $('#aside-menu').css({
        //         'display': 'flex',
        //         'position': 'absolute',

        //     })

        // })
        $('.menu').off('mouseleave', skrii)
        //     $('#aside-menu').css({
        //         'display': 'flex',
        //         'position': 'absolute',
        //     // $('#aside-menu').css({'display':'none','position':'static'})
        // });
        // });
    };
    getProducts().then(function (products) {
        var productsL = [];
        var pr = [];
        productsList._productList = Array.prototype.slice.call(products.products, 0);
        productsL = Array.prototype.slice.call(products.products, 0);
        console.log(filterCompany(productsL, 'phone'));
        function router() {
            var page = location.hash.slice(1);

            switch (page) {
                case 'home':
                    // $('#aside-menu').css({ 'display': 'none', 'position': 'static' })
                    // $('#myCarousel').css('display', 'inline-block');
                    showMenu();
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
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'phone'))
        }
        function tabletController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'tablet'))
        }
        function tvController() {
            console.log("hop");
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'tv'))
        }
        function toysController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'toys'))
        }
        function menController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'men'))
        }
        function womenController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'women'))
        }
        function cameraController() {
            putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'camera'))
        }

        window.addEventListener('hashchange', router);
        router();


    }).catch(function (data) {
        console.log(data);
    });




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
                container.innerHTML = templateFunc(products);
            });
        }

    }


    function filterProducts(products, val, type) {
        var prod = products.filter(pr => pr[type] == val);
        return prod;
    }

    function filterCompany(products, val) {
        var companies = [];
        var prod = filterProducts(products, val, 'type');
        console.log(prod);
        prod.forEach(function (element) {
            if (!(companies.some(comp => comp.compName == element.companyName))) {
                companies.push({ compName: element.companyName });
            }
        });
        return { productsList: prod, companies: companies };
    }
});

