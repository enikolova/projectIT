$(function () {
    getProducts().then(function (products) {
        var productsL = [];
        var pr = [];
        productSklad._productList = Array.prototype.slice.call(products.products, 0);
        productsL = Array.prototype.slice.call(products.products, 0);
        console.log(filterCompany(productsL, 'phone'));
        var searchBar = $("#txtSearch");
        searchBar.on("keydown", function () {

        })
    }).catch(function (data) {
        console.log(data);
    });
     });