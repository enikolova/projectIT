var productSklad = (function () {
    var productSklad=new ProductList()
    function Product(type, name, url, companyName, price, color, description, isNew) {
        this.type = type;
        this.name = name;
        this.url = url;
        this.companyName = companyName;
        this.price = price;
        this.color = color;
        this.description = description;
        this.isNew = isNew;
        this.id = Product.prototype.id++
    }
    Product.prototype.id = ((productSklad._productList.length == 0) ? 1 : (productSklad._productList.length + 1));
    function ProductList() {
        this._productList = [];
    }
    ProductList.prototype.addProduct = function (type, name, url, companyName, price, color, description, isNew) {
        this._productList.push(new Product(type, name, url, companyName, price, color, description, isNew));
        // setData(this.productList);
    }
    function setData(array) {
        var sendData = JSON.stringify(array)
        $.ajax({
            url: 'http://localhost/pr/projectIT/intermediateProject/product.json',    //Your api url
            type: 'PUT',   //type is any HTTP method
            data: {
                data: sendData
            },      //Data as js object
            success: function () {
            }
        
        })
    }
return productSklad;
})();


