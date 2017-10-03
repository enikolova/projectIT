var userList = (function () {
    var id = 1
    function User(email, password) {
        this.password = password;
        this.email = email;
        this.favorites = [];
        this.shopingCart = [];
        this.id = id++;
        this.isLoged = false;
    }

    User.prototype.addToFavorites = function (item) {
        this.favorites.push(item);
        localStorage.setItem('users', JSON.stringify(userList._users));

    }
    User.prototype.removeFromFavorites = function (item) {
        var id = this.favorites.findIndex(el => el == item.name)
        this.favorites.splice(id, 1);
        localStorage.setItem('users', JSON.stringify(userList._users));
    }
    User.prototype.addToShopingCard = function (item) {
        this.shopingCart.push(item);
        localStorage.setItem('users', JSON.stringify(userList._users));
    }
    User.prototype.removeFromShopingCart = function (item) {
        var id = this.shopingCart.findIndex(el => el == item.name)
        this.shopingCart.splice(id, 1);
        localStorage.setItem('users', JSON.stringify(userList._users));
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
        if (email) {
            if (!(this._users.some(user => user.email === email))) {
                this._users.push(new User(email, password));
                localStorage.setItem('users', JSON.stringify(this._users));
            }
        }
    }


    UserList.prototype.login = function (email, password) {
        var user = this._users.find(user => user.email === email &&
            user.password === password)
        if (user) {
            user.isLoged = true;
            return user;
        } else {
            return null;
        }
    }
    UserList.prototype.logout=function(id){
        var user=this._users.find(user => user.id==id && user.isLoged==true);
        if(user){
            user.isLoged=false;
            return true;
        }return false;
    }

    return new UserList();
})();
