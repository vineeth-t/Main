function modelFunction(){
    var x=document.getElementById('modal');
    var y=document.getElementById('symbol');
 
    if(x.className==='list-parent-right'){
     x.className+="modalMobile";
     y.className+="remove";
    
    } else{
     x.className='list-parent-right';
     y.className='list-parent-left'

    }
   }
function floatingAction(){
       document.getElementById('menu-items').style.display='flex';
       
   }
   function floatingOff(){
    document.getElementById('menu-items').style.display='none';
    
   }