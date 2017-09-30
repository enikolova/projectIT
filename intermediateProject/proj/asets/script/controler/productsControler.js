function getProducts(){
    return new Promise(function(resolve,reject){
         var xhr;
    if (XMLHttpRequest == undefined)
        xhr = new ActiveXObject(); // IE <= 7
    else
        xhr = new XMLHttpRequest();


    xhr.open('GET','http://localhost/intermediateProject/product.json', true);
    xhr.send(null);
    xhr.addEventListener('load', function() {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            var products = JSON.parse(response);
            console.log(products);
            resolve(products);
        } else {
            reject({ error: xhr.status, errorText: xhr.statusText });
        }
    });
    })
}