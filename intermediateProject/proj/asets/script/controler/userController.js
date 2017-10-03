document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reg_con').addEventListener('click', function (event) {
        event.preventDefault();
        var email = document.querySelectorAll("#reg input.form-control")[0].value;
        if ($("#reg input.form-control")[1].value != "" && $("#reg input.form-control")[2].value != "" && $("#reg input.form-control")[1].value == $("#reg input.form-control")[2].value) {
            var password = $("#reg input.form-control")[1].value;
            userList.addUser(email, password);
            $("#reg").hide();
            $("#login").show();
        } else {
            $("#reg input.form-control")[1].value = "";
            $("#reg input.form-control")[2].value = "";
        }
    })


    document.querySelector('#login button').addEventListener('click', function (event) {
        event.preventDefault()
        var email = document.querySelectorAll("#login input.form-control")[0].value;
        var password = document.querySelectorAll("#login input.form-control")[1].value;
        $("#main,.footer").css("display","block");
        location.hash="#home";
        $("#mainPage").hide();
        setTimeout(function() {
            location.hash="";
        }, 0);
    })
window.onunload=function(){
     location.hash="";

    location.href=location.href.slice(0,49)
}
})
