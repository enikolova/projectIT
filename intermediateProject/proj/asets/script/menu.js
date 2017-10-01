document.addEventListener('DOMContentLoaded',function(){
  var li=document.querySelectorAll('#aside-menu li');
 
  li.forEach(function(x){
      var menu= document.getElementById(x.id+'-menu')
      menu.addEventListener('mouseover',function(){
          menu.style.display='inline-block';
      })
       menu.addEventListener('mouseleave',function(){
         setTimeout(function(){
            menu.style.display='none';
         },1000); 
      })
      x.addEventListener('mouseover',function(){
           menu.style.display='inline-block';
      });
      x.addEventListener('mouseout',function(){
          x.style.border='none';
           menu.style.display='none';
      })
  })


},false)