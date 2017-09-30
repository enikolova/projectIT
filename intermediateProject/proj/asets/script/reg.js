document.addEventListener('DOMContentLoaded',function(){
document.querySelector('#register').addEventListener('click',function(){
    event.preventDefault();
    document.getElementById('login').style.display='none';
    document.getElementById('reg').style.display='block';
})

})
