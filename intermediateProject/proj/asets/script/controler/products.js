document.addEventListener('DOMContentLoaded',function(){
    getProducts().then(function(products){
        productsList._productList=Array.prototype.slice.call(products.products,0);
        console.log(productsList._productList);
    }).catch();

   var templateText=document.getElementById('product-template').innerHTML;
   var template=Handlebars.compile(templateText);
   var readyTemp=template(productsList);
   console.log(readyTemp);
   document.getElementById('products').innerHTML=readyTemp;
})