$(function () {
    function search(text,array){
    var textyt=text.toLowerCase();
    var arr=[]
    var result=array.filter(function(x){
        if(x.name.toLowerCase().search(textyt)!=-1){
            arr.push({name:x.name,id:x.id,});
            
        }else{
            
        }                         
        })
return {products:arr}
};

    getProducts().then(function (products) {
        var productsL = [];
        productsL = Array.prototype.slice.call(products.products, 0);
        var searchBar = $("#txtSearch");
        searchBar.on("keypress", function () {
          var content=searchBar.val();
          console.log(content)
          var array=new Object(search(content,productsL))
          putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/searchTemplate.htm',array,"#searchResult")
            
        })
    }).catch(function (data) {
        console.log(data);
       
    });
     });