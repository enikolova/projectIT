$(function () {
    $("#reg_con").click(function () {
         event.preventDefault();
        var email =document.querySelectorAll("input.form-control")[0].value;
        if ($("#reg input.form-control")[1].val == $("#reg input.form-control")[2].value) {
            var password = $("input.form-control")[1];
            userList.addUser(email, password);
            $("#reg").hide();
            $("#login").show();
        } else {
            $("input.form-control")[1] = "";
            $("input.form-control")[2] = "";
        }
    })
})