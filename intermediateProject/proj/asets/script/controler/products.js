document.addEventListener('DOMContentLoaded',function(){
    getProducts().then(function(products){
        productsList._productList=Array.prototype.slice.call(products.products,0);
        console.log(productsList);
      var templateText=document.getElementById('product-template').innerHTML;
   var template=Handlebars.compile(templateText);
   var readyTemp=template(productsList);
   document.getElementById('products').innerHTML=readyTemp;
    }).catch();

  
})