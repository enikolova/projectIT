

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
        console.log(document.getElementById('category'));
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
    }
    var router=function(){

    }
   document.addEventListener('DOMContentLoaded', function () {
    getProducts().then(function (products) {
        var productsL = [];
        var pr = [];
        productSklad._productList = Array.prototype.slice.call(products.products, 0);
        productsL = Array.prototype.slice.call(products.products, 0);
        console.log(filterCompany(productsL, 'phone'));
       router=function(){
            var page = location.hash.slice(1);
            console.log(page);
            if (!(isNaN(page)) && (page != "")) {
                console.log(page);
                hideMenu();
                // showMenu();
                productController();
            } else {
                switch (page) {
                    case 'home':
                        // $('#aside-menu').css({ 'display': 'none', 'position': 'static' })
                        // $('#myCarousel').css('display', 'inline-block');
                        showMenu();
                        carouselController();
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
                        break;
                    case "cart": {
                        hideMenu();
                        cartController();
                    }
                }
            }

            function cartController() {
                var pr = signedUser.shopingCart;
                var total = 0;
                pr.forEach(x => total += x.price);
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/kolichkaTemplate.htm', { shopingCart: pr, total: total, shipping: 5, tot: (total + 5) }, 'main')
            }
            function homeController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/homeTemplate.htm', undefined, 'main');
            }
            function phoneController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'phone'), 'main')
            }
            function tabletController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'tablet'), 'main')
            }
            function tvController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'tv'), 'main')
            }
            function toysController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'toys'), 'main')
            }
            function menController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'men'), 'main')
            }
            function womenController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'women'), 'main')
            }
            function cameraController() {
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', filterCompany(productsL, 'camera'), 'main')
            }
            function carouselController() {
                homeController();
                var carouselItem = { firstItem: fiveRandomItem(productsL), secondItem: fiveRandomItem(productsL), thirdItem: fiveRandomItem(productsL), forthItem: fiveRandomItem(productsL), fifthItem: fiveRandomItem(productsL) };
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/carouselTemplate.htm', carouselItem, '#carousell')
                $(".items").css("display", "none");
            }
            function productController() {

                console.log(page);
                var index = productSklad._productList.findIndex(x => x.id == page);
                console.log(index);
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/oneProductTemplate.htm', productsL[index], 'main')
            }
           
               
}
       
        window.addEventListener('hashchange', router);
router();
    }).catch(function (data) {
    console.log(data);
});



});
