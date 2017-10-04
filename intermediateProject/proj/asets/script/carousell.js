var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("items");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if(x[slideIndex-1]!=undefined){
        slideIndex++;
    }
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
}
setInterval(carousel,3000);
