function modelFunction(){
    var x=document.getElementById('modal');
    var y=document.getElementById('symbol');
    console.log(x)
    if(x.className==='list-parent-right'){
     x.className+="modalMobile";
     y.className+="remove";
     console.log(x,y)
    } else{
     x.className='list-parent-right';
     y.className='list-parent-left'
     console.log(x)
    }
   }