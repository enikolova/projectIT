var userList = (function () {
    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.favorites = [];
        this.shopingCart = [];
        
    }
    User.prototype.addToFavorites = function (item) {
        this.favorites.push(item);
       
    }
    User.prototype.removeFromFavorites = function (item) {
        var id = this.favorites.findIndex(el => el == item.name)
        this.favorites.splice(id, 1);
        

    }
    User.prototype.addToShopingCard = function (item) {
        this.shopingCart.push(item);
    }
    User.prototype.removeFromShopingCart = function (item) {
        var id = this.shopingCart.findIndex(el => el == item.name)
        this.shopingCart.splice(id, 1);
    }

    function UserList() {
        if (localStorage.getItem('users') != null)
            this._users = JSON.parse(localStorage.getItem('users'));
        else {
            this._users = [];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
    }
    UserList.prototype=Object.create(User.prototype);
    UserList.prototype.constructor=UserList;

    UserList.prototype.addToFavorites=function(item){
        UserList.prototype.addToFavorites.call(this,item);
        localStorage.setItem('users', JSON.stringify(this._users));
    }
    UserList.prototype.addUser = function (username, password, email) {
        if ((typeof username == 'string') && (username.trim().length > 3) &&
            (password.trim().length > 5) && email) {
            if (!(this._users.some(user => user.username === username))) {
                this._users.push(new User(username, password, email));
                localStorage.setItem('users', JSON.stringify(this._users));
            }
        }
    }


    UserList.prototype.login = function (username, password) {
        return this._users.some(user => user.username === username &&
            user.password === password);
    }

    return new UserList();
})();
