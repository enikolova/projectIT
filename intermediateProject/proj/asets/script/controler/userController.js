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
        var user=userList.login(email,password)
        if(user){
        $("#main,.footer").css("display","block");
        location.hash="#home";
        $("#mainPage").hide();
        // setTimeout(function() {
        //     location.hash="";
        // }, 0);
        }
    })
    var txt=$("#itemID").text().slice(17)
 window.onunload=function(){
     var isLoged=userList._users.some(x=>x.isLoged===true)
     if(!(isLoged)){
    location.hash="";
    location.href=location.href.slice(0,49)
 }}

// $('body').on('keydown',function(event){
// if (event.which == 116 || event.which == 17) {
//     window.onunload();
// }
// })

$('#l').on('mouseover',function(){
    putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/signedUserTemplate.htm',signedUser, '#log')
})
$('#f').on('mouseover',function(){
     putTemplate('http://localhost/pr/projectIT/intermediateProject/proj/asets/script/views/favoriteTemplate.htm',{favorites:signedUser.favorites}, '#favorite')
})

})

