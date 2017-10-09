//var us=JSON.parse(sessionStorage.getItem('signedUser'))
// var userList = (function () {
    var userList = new UserList();
    var user=new User();
var signedUser=null
    function User(email, password) {
        this.password = password;
        this.email = email;
        this.favorites = [];
        this.shopingCart = [];
        this.cards=[];
        this.address=[];
        this.id = User.prototype.id++;
        this.isLoged = false;
    }
    User.prototype.id = userList._users.length == 0 ? 1 : userList._users.length + 1;
    User.prototype.addToFavorites = function (id) {
        var item=productSklad._productList.find(prod=>prod.id==id);
        console.log(productSklad._productList);
        this.favorites.push(item);
        var users=JSON.parse(localStorage.getItem('users'));
        var si=users.find(user=>signedUser.email==user.email);
        si.favorites=signedUser.favorites;
        localStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('signedUser',JSON.stringify(this));

    }
    User.prototype.removeFromFavorites = function (id) {
        var id = this.favorites.findIndex(el => id == el.id)
        this.favorites.splice(id, 1);
        localStorage.setItem('users', JSON.stringify(userList._users));
        sessionStorage.setItem('signedUser',JSON.stringify(this));
    }
    User.prototype.addToShopingCard = function (id) {
         var item= productSklad._productList.find(prod=>prod.id==id);
        this.shopingCart.push(item);
        localStorage.setItem('users', JSON.stringify(userList._users));
        sessionStorage.setItem('signedUser',JSON.stringify(this));
    }
    User.prototype.removeFromShopingCart = function (id) {
        var id = this.shopingCart.findIndex(el => id == el.id);
        this.shopingCart.splice(id, 1);
        localStorage.setItem('users', JSON.stringify(userList._users));
        sessionStorage.setItem('signedUser',JSON.stringify(this));
    }

    function UserList() {
        if (localStorage.getItem('users') != null)
            this._users = JSON.parse(localStorage.getItem('users'));
        else {
            this._users = [];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
    }

    UserList.prototype.addUser = function (email, password) {
        if ((email && email.indexOf('@') != -1) && (password.trim().length > 4)) {
            if (!(this._users.some(user => user.email === email))) {
                this._users.push(new User(email.trim(), password.trim()));
                localStorage.setItem('users', JSON.stringify(this._users));
            }
        }
    }


    UserList.prototype.login = function (email, password) {
        var user = this._users.find(user => user.email === email &&
            user.password === password)
        if (user) {
            user.isLoged = true;
            localStorage.setItem('users', JSON.stringify(this._users));
            sessionStorage.setItem('signedUser',JSON.stringify(user));
            us=JSON.parse(sessionStorage.getItem('signedUser'))
            signedUser=user;
            return user;
        } else {
            return null;
        }
    }
    UserList.prototype.logout = function (email) {
        var user = this._users.find(user => user.email == email);
        console.log(user);
        if (user) {
            user.isLoged = false;
            localStorage.setItem('users', JSON.stringify(this._users));
            sessionStorage.setItem('signedUser','');
            return true;
        } return false;
    }
    userList.addUser("admin@gmail.com", "123456");
//     return userList;

// })();



