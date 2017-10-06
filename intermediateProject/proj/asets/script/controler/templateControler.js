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
                console.log("put2")
                container.innerHTML = templateFunc({});
            });
        } else {
            loadTemplate(templateUrl).then(function (templateText) {
                var templateFunc = Handlebars.compile(templateText);
                var container = document.querySelector(where);
                console.log("put3")
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