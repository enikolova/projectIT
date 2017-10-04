document.addEventListener('DOMContentLoaded',function(){
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("items");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    if(x[slideIndex-1]!=undefined)
    x[slideIndex-1].style.display = "flex"; 
    setTimeout(function(){
        carousel();
    },7000);
}

})

