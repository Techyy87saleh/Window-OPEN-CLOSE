let button1 = document.getElementById('open');
 let button2 = document.getElementById('close');

 button1.addEventListener('click',()=>{
     
   
 
     let mytab;
     mytab = window.open('https://www.javatpoint.com/', '_blank','height=200,width=100');
      
    
     button2.addEventListener('click',()=>{

 
     mytab.close();
 
 
      
     });
    
  });
