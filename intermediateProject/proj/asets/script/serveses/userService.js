var userList = (function () {
var userList=new UserList();
    function User(email, password) {
        this.password = password;
        this.email = email;
        this.favorites = [];
        this.shopingCart = [];
        this.id = User.prototype.id++;
        this.isLoged = false;
    }
    User.prototype.id  = userList._users.length == 0 ? 1 : userList._users.length + 1;
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
            return user;
        } else {
            return null;
        }
    }
    UserList.prototype.logout = function (id) {
        var user = this._users.find(user => user.id == id && user.isLoged == true);
        if (user) {
            user.isLoged = false;
            localStorage.setItem('users', JSON.stringify(this._users));
            return true;
        } return false;
    }
    userList.addUser("admin@gmail.com","123456");
    return userList;
})();
