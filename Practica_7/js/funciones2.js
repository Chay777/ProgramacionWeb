

$(document).ready(

  function(){

    var nuevacarta;
    var cont=1 ;
    var numero= 2000;;
    var contador=0;
    var con=1;
    var vector=[7];
    var i=0;
    var j; 
            vector[i]=Math.round(Math.random()*(32-1)+1); 
                for(i=1;i<8;i++) 
                    { 
                     vector[i]=Math.round(Math.random()*(32-1)+1); 
                    for(j=0;j<i;j++) 
                     { 
                      if(vector[i]==vector[j]) 
                           { 
                              i--; 
                          } 
                         } 
                        } 

                   for(i=0;i<8;i++) 
                   { 
                  $("#carta" + con ).attr('src',"img/lote-"+vector[i]+".jpg");
                      con++;
               }

    setInterval(



      function(){
        //console.log('Hola');
        
        nuevacarta = 'img/lote-'+cont+'.jpg';
        $('#cartaMaestra').attr('src',nuevacarta);
                cont++;
              
                if(cont==32)
                {
                  
                  alert('PERDISTE')
                
                }

      },numero
    );

    $('.carta').click(
      function(){
        $(this).attr('src',"img/x.jpg");
          contador++;
          if(contador==8)
          {
             alert('GANASTE')
             numero=10000;
          }
            
      }
    );

        }
    );









