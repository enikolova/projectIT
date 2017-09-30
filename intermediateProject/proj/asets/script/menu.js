document.addEventListener('DOMContentLoaded',function(){
  var li=document.querySelectorAll('#aside-menu li');
 
  li.forEach(function(x){
      var menu= document.getElementById(x.id+'-menu')
      menu.addEventListener('mouseover',function(){
          menu.style.display='inline-block';
      })
       menu.addEventListener('mouseleave',function(){
          menu.style.display='none';
      })
      x.addEventListener('mouseover',function(){
           menu.style.display='inline-block';
          event.stopImmediatePropagation()
           console.log(menu);
      });
      x.addEventListener('mouseout',function(){
          x.style.border='none';
           menu.style.display='none';
           console.log(menu);
          
      })
  })


},false)