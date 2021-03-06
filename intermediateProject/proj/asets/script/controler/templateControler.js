function loadTemplate(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        console.log("load")
        xhr.open('GET', url, true);
        xhr.onload = function () {
            resolve(xhr.responseText);
        }
        xhr.send(null);
    })
}
function putTemplate(templateUrl, products, where) {
    if (arguments.length == 2 && !(products)) {
        loadTemplate(templateUrl).then(function (templateText) {
            var templateFunc = Handlebars.compile(templateText);
            var container = document.querySelector(where);
            container.innerHTML = templateFunc({});
        });
    } else {
        loadTemplate(templateUrl).then(function (templateText) {
            var templateFunc = Handlebars.compile(templateText);
            var container = document.querySelector(where);
           
            container.innerHTML = templateFunc(products);
$('#comp input').each(function(){
    this.addEventListener('click',function(){
        var which=location.hash.slice(1);
    console.log(which);
        var w=this.getAttribute('comp')
        console.log(w);
        var prod=filt(productSklad._productList,which.toString(),'type','companyName',w.toString());
        var com=filterCompany(productSklad._productList,which)
        console.log(prod);
        putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm',{ productsList: prod, companies: com.companies}, 'main')
    })
})
            $('#exit').on('click',function(){
                location.hash="";
                var user=userList._users.find(user=>user.email==signedUser.email && user.password==signedUser.password);
                console.log(userList.logout(user.email))
                if(userList.logout(user.email))
                {
                    location.reload();
                }

            })
            $('#lubimi tr').each(function(){
                this.addEventListener('mouseover',function(){
                    this.style.backgroundColor='lightblue';
                })
                this.addEventListener('mouseleave',function(){
                     this.style.backgroundColor='white';
                })
                this.addEventListener('click',function(){
                   var id=this.getAttribute('prodID')
                var index = productSklad._productList.findIndex(x => x.id == id);
                console.log(index);
               location.hash=id;
               router();
                putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/oneProductTemplate.htm',productSklad._productList[index], 'main')
                })
            })
             $('strong[prod]').each(function() {
                        var all = 0;
                        document.querySelectorAll('.money').forEach(x => all += Number(x.textContent));
                        document.querySelector('#all').textContent = all;
                         document.querySelector('#tot').textContent = all+5;
                    })
            $('.exampleInputEmail1').each(function () {

                this.addEventListener('click', function () {
                    var product = products.shopingCart.find(prod => prod.id == this.getAttribute('prodPrice'));
                    document.querySelector('strong[prod="' + this.getAttribute('prodPrice') + '-col"').textContent = product.price * this.value;
                    $('strong[prod]').each(function() {
                        var all = 0;
                        document.querySelectorAll('.money').forEach(x => all += Number(x.textContent));
                        document.querySelector('#all').textContent = all;
                         document.querySelector('#tot').textContent = all+5;
                    })

                })
            })


            $('.productsmoney .btn-danger').each(function (event) {

                this.addEventListener('click', function () {
                    console.log(products);
                    var prodIndex = products.shopingCart.findIndex(product => product.id == this.getAttribute('prod'))
                    //  products.shopingCart.splice(prodIndex,1);
                    user.removeFromShopingCart.call(signedUser, this.getAttribute('prod'));
                    var total = 0;
                    products.shopingCart.forEach(x => total += x.price)
                    products.total = total;
                    products.tot = products.total + products.shipping;
                    putTemplate(templateUrl, products, where);
                })
            })
        });
    }

}
 
function filterProducts(products, val, type) {
    var prod = products.filter(pr => pr[type] == val);
    return prod;
}
function filt(products, val, type, prop, val2) {
    var typeProd = filterProducts(products, val, type);
    var s = filterProducts(typeProd, val2, prop);
    return s;
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


function fiveRandomItem(products, type) {
    var items = [];
    if (arguments.length == 1) {
        for (var index = 0; index < 5; index++) {
            items.push(products[Math.floor(Math.random() * products.length)]);
        }
    } else {
        var prod = filterProducts(products, type, 'type');
        for (var index = 0; index < 5; index++) {
            items.push(prod[Math.floor(Math.random() * prod.length)]);
        }
    }

    return items;
}

function loadNew(isNew) {
    var which = location.hash.slice(1);
    var items = filt(productSklad._productList, which.toString(), 'type', 'isNew', isNew);
    var pr = filterProducts(productSklad._productList, which, 'type');
    var comp1 = filterCompany(items, which.toString()).companies;
    var comp2 = filterCompany(pr, which.toString()).companies;
    if (arguments.length == 0) {
        putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', { productsList: pr, companies: comp2 }, 'main')
    } else {
        putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/productTemplate.htm', { productsList: items, companies: comp1 }, 'main')
    }
}