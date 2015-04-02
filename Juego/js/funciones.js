        
$(document).ready(function(){



//////////////////////////variables globales/////////////////////////////////////////////////////
var Elemento = document.getElementById('Lienzo');
var Lienzo = Elemento.getContext('2d');
var palabras=["CASA","ARBOL","ARRIBA","MONITOR","TELEVISION","MESA","TECLADO","TELEFONO","MOUSE","LAPTOP","COLCHON","CELULAR","CAMION"]; // aqui las palabras para el juego modo normal
var pistas=["Donde vives","Tiene hojas y ramas","se sube hacia: ","parte de una computadora","ver programas ","Para comer sobre ella","Para escribir","Para llamar","raton","cmoputadora portatil","para dormir","enviar mensajes texto","nos ayuda a Viajar "];
var palabra_entrada=[1];
var aleatorio= Math.round(Math.random()*(13)+1);
var intento=0;
var opcion=0;
var aciertos=0;
var aumento=0;


//////////////////////////Evento del boton Comenzar/////////////////////////////////////////////////////
$("#comenzar").click(function(aleatorio){
   
    pintar_lineas();
 
   


});

//////////////////////////Evento del boton Comenzar/////////////////////////////////////////////////////

$("#pistas").click(function(){
   
    alert("La pista te costara un intento");

    var posicion= aleatorio;

    var pista= pistas[posicion];

    alert("Pista: "+pista);
     aumento++;


});






//////////////////////////Evento del boton VSplayer/////////////////////////////////////////////////////
$("#VSplayer").click(function() // esta funcion es para el boton VSplayer
                                // que es para jugar contra alguien
{
    
    JugarVSP2();



}
);

$("#listo").click(function(aleatorio){
   

 
 opcion=1;
 
   


});
//////////////////////////Evento del boton NUEVO/////////////////////////////////////////////////////
$("#nuevo").click(function() // esta funcion es para cuando se desee jugar otra vez
                             // lo que hara es recargar la pagina.
{

     location.reload();
}
);
//////////////////////////funcion JugarVSP2/////////////////////////////////////////////////////
function JugarVSP2(){ // esta funcion permite a otro usuario introducir la palabra para adivinar.
                      // hasta que se activa esta funcion, el capo se habilita, sino no lo hará.
                      // 
$("#entrada").attr("disabled",true);
$("#entrada").removeAttr("disabled");

$("#listo").click(function(){
var op=1;
var opcion=op;
           

 var entrada= $("#entrada").val();
var a=150;
var b=200;

    palabra_entrada[0]=entrada;


       
        for (var i = 0; i < entrada.length; i++) { // este ciclo toma el valor de la palabra
                                                   // y calcula la cantidad de letras a dibujar.

        Lienzo.beginPath();
        Lienzo.moveTo(a,b);//punto inicial
        Lienzo.lineTo(a+25,b);// punto final
        Lienzo.lineWidth = 2; //grosor de la linea
        Lienzo.strokeStyle = 'white';
        Lienzo.stroke(); 
         Lienzo.closePath();
        a=a+40;
      
        };
L



});

}//fin de funcion VSP2


//////////////////////////Funcion pintar lineas/////////////////////////////////////////////////////
function pintar_lineas() //este metodo se ejecutara cuando de clic en comenzar
                                    // lo qu ehara es pintar las lineas correspondientes 
                                    // al numero de letras de la palabra.
{
  
    var aleatori=aleatorio;
    var x=150;
    var y=205;
    //var img = new Image();
    //img.src = "img/letraF.png";
  
    for (i=0;i<palabras[aleatori].length;i++)
    {
        Lienzo.beginPath();
        Lienzo.moveTo(x,y);//punto inicial
        Lienzo.lineTo(x+25,y);// punto final
        Lienzo.lineWidth = 2; //grosor de la linea
         Lienzo.strokeStyle = 'white';
        Lienzo.stroke(); //la linea se ace visible con el color del trazo
        Lienzo.closePath();
        //Lienzo.drawImage(img, 2, 2)
        

        x=x+40;
    };
};
//////////////////////////////Eventos de boton PRIMERA LINEA///////////////////////////////////////////////////////////
$("#btn_Q").click(function(){
$("#btn_Q").attr("disabled",true);
var x= $("#btn_Q").attr("name");
if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 });

$("#btn_W").click(function(){
$("#btn_W").attr("disabled",true);
var x= $("#btn_W").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
});

$("#btn_E").click(function(){
$("#btn_E").attr("disabled",true);
var x= $("#btn_E").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });
 $("#btn_R").click(function(){
$("#btn_R").attr("disabled",true);
var x= $("#btn_R").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });
 $("#btn_T").click(function(){
$("#btn_T").attr("disabled",true);
var x= $("#btn_T").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });
 $("#btn_Y").click(function(){
$("#btn_Y").attr("disabled",true);
var x= $("#btn_Y").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });

 $("#btn_U").click(function(){
$("#btn_U").attr("disabled",true);
var x= $("#btn_U").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });

 $("#btn_I").click(function(){
$("#btn_I").attr("disabled",true);
var x= $("#btn_I").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });

 $("#btn_O").click(function(){
$("#btn_O").attr("disabled",true);
var x= $("#btn_O").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });

 $("#btn_P").click(function(){
$("#btn_P").attr("disabled",true);
var x= $("#btn_P").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x)

 
 });
 //////////////////////////////Eventos de boton SEGUNDA LINEA///////////////////////////////////////////////////////////

 $("#btn_A").click(function(){
$("#btn_A").attr("disabled",true);
var x= $("#btn_A").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_S").click(function(){
$("#btn_S").attr("disabled",true);
var x= $("#btn_S").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_D").click(function(){
$("#btn_D").attr("disabled",true);
var x= $("#btn_D").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_F").click(function(){
$("#btn_F").attr("disabled",true);
var x= $("#btn_F").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_G").click(function(){
$("#btn_G").attr("disabled",true);
var x= $("#btn_G").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_H").click(function(){
$("#btn_H").attr("disabled",true);
var x= $("#btn_H").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_J").click(function(){
$("#btn_J").attr("disabled",true);
var x= $("#btn_J").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_K").click(function(){
$("#btn_K").attr("disabled",true);
var x= $("#btn_K").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_L").click(function(){
$("#btn_L").attr("disabled",true);
var x= $("#btn_L").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

 $("#btn_Ñ").click(function(){
$("#btn_Ñ").attr("disabled",true);
var x= $("#btn_Ñ").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

  //////////////////////////////Eventos de boton TERCERA LINEA///////////////////////////////////////////////////////////

 $("#btn_Z").click(function(){
$("#btn_Z").attr("disabled",true);
var x= $("#btn_Z").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x); });

  $("#btn_X").click(function(){
$("#btn_X").attr("disabled",true);
var x= $("#btn_X").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x); });

   $("#btn_C").click(function(){
$("#btn_C").attr("disabled",true);
var x= $("#btn_C").attr("name");


if(opcion==0){
buscar(x);
}
else 
buscar2(x);


 });

    $("#btn_V").click(function(){
$("#btn_V").attr("disabled",true);
var x= $("#btn_V").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x); 
});

     $("#btn_B").click(function(){
$("#btn_B").attr("disabled",true);
var x= $("#btn_B").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

      $("#btn_N").click(function(){
$("#btn_N").attr("disabled",true);
var x= $("#btn_N").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x); });

       $("#btn_M").click(function(){

       
$("#btn_M").attr("disabled",true);
var x= $("#btn_M").attr("name");

if(opcion==0){
buscar(x);
}
else 
buscar2(x);
 });

//////////////////////////funcion buscar/////////////////////////////////////////////////////
function buscar(x)
{
    //si se le dio clic al boton listo, palabra x es igual a entrada sino se queda como esta.
    
 var x= x;// aqui recibo como parametro x que es el nombre del boton.
 var alea=aleatorio;// paso el valor del alatorio generado en una varible global y lo paso a una variable en este metodo.
 var palabraX= palabras[alea];//aqui obtengo la palabra elegida al azar
  var contador=0;
  var estado=true;
 
 
 for(i=0;i<palabraX.length;i++)
 {
    var caracter= palabraX.charAt(i);//obtengo el caracter en la posicion i de esa palabra.
    var caracter2= x.charAt(0);// paso el nombre del boton a un caracter. como solo es una letra pues indico la posicion 0.
    var aux=40*(i);// para recorrer las letras, segun vaya apareciendo.
    var tamañoPalabra= palabraX.length;
    
    contador=0;// primer discriminador para aumentar intento --reinicio el contador para saber que si se encontro un caracter
    if(caracter==x && i==0)
    {   
        var operacion= (153);
       // alert("si esta la letra "+caracter+" en la posicion"+i);
        Lienzo.beginPath();
        Lienzo.font = "bold 24px sans-serif";
        Lienzo.fillStyle = 'white';
        Lienzo.fillText(caracter2,operacion,201);//primer argumento el nombre del boton, en caso de que lo encuentre los demas son la posicion x y Y
        Lienzo.closePath();
        contador=0;
        estado=false;// segundo discriminador --cambio el estado a falso, para saber que si encontro un caracter y asi no aumente un intento.
        aciertos++;
    
    }
    else if(caracter==x)
    {   
        var operacion= (aux+153);
        //alert("si esta la letra "+caracter+" en la posicion"+i);
        Lienzo.beginPath();
        Lienzo.font = "bold 24px sans-serif";
        Lienzo.fillStyle = 'white';
        Lienzo.fillText(caracter2,operacion,201);
        Lienzo.closePath();
         aciertos++;
         contador=0;
         estado=false;//indica que ya encontro ell caracter.


    }
    else if(caracter != x ) // si caracter no esta, aumentara el contador para saber que no hay nada y asi aumentar un intento.
            {

            contador++;
            ///alert("contador esta en "+contador)
                }

    

 }// termina el for
   
 if(aciertos==palabraX.length)
  {
    alert("ganaste!")

        $("#btn_Q").attr("disabled",true);
        $("btn_Q").removeAttr("disabled");

         $("#btn_W").attr("disabled",true);
        $("btn_W").removeAttr("disabled");

         $("#btn_E").attr("disabled",true);
        $("btn_E").removeAttr("disabled");

         $("#btn_R").attr("disabled",true);
        $("btn_R").removeAttr("disabled");

         $("#btn_T").attr("disabled",true);
        $("btn_T").removeAttr("disabled");

         $("#btn_Y").attr("disabled",true);
        $("btn_Y").removeAttr("disabled");

        $("#btn_U").attr("disabled",true);
        $("btn_U").removeAttr("disabled");

         $("#btn_I").attr("disabled",true);
        $("btn_I").removeAttr("disabled");

         $("#btn_O").attr("disabled",true);
        $("btn_O").removeAttr("disabled");

         $("#btn_P").attr("disabled",true);
        $("btn_P").removeAttr("disabled");

         $("#btn_A").attr("disabled",true);
        $("btn_A").removeAttr("disabled");

         $("#btn_S").attr("disabled",true);
        $("btn_S").removeAttr("disabled");

         $("#btn_D").attr("disabled",true);
        $("btn_D").removeAttr("disabled");

         $("#btn_F").attr("disabled",true);
        $("btn_F").removeAttr("disabled");

         $("#btn_G").attr("disabled",true);
        $("btn_G").removeAttr("disabled");

         $("#btn_H").attr("disabled",true);
        $("btn_H").removeAttr("disabled");

         $("#btn_J").attr("disabled",true);
        $("btn_J").removeAttr("disabled");

         $("#btn_K").attr("disabled",true);
        $("btn_K").removeAttr("disabled");

         $("#btn_L").attr("disabled",true);
        $("btn_L").removeAttr("disabled");

         $("#btn_Ñ").attr("disabled",true);
        $("btn_Ñ").removeAttr("disabled");

         $("#btn_Z").attr("disabled",true);
        $("btn_Z").removeAttr("disabled");

         $("#btn_X").attr("disabled",true);
        $("btn_X").removeAttr("disabled");

         $("#btn_C").attr("disabled",true);
        $("btn_C").removeAttr("disabled");

         $("#btn_V").attr("disabled",true);
        $("btn_M").removeAttr("disabled");

         $("#btn_B").attr("disabled",true);
        $("btn_B").removeAttr("disabled");

         $("#btn_N").attr("disabled",true);
        $("btn_N").removeAttr("disabled");

         $("#btn_M").attr("disabled",true);
        $("btn_M").removeAttr("disabled");

        





  }            
  if(contador!=0 && estado != false ) // en caso de que no se encuentre nada y que  sea verdadero el estado, aumentara el estado.
  {
    aumentar_intento(palabraX);
    $("#marcador").attr('value',8-intento-1);
    intento++;

   
    //alert("intento esta en: "+intento )


  }
 



  
}
//termina la funcion buscar.

function buscar2(x)
{
    //si se le dio clic al boton listo, palabra x es igual a entrada sino se queda como esta.
    
 var x= x;// aqui recibo como parametro x que es el nombre del boton.
 /// paso el valor del alatorio generado en una varible global y lo paso a una variable en este metodo.
 var palabraX= palabra_entrada[0];//aqui obtengo la palabra elegida al azar
  var contador=0;
  var estado=true;
 
 
 for(i=0;i<palabraX.length;i++)
 {
    
    var caracter= palabraX.charAt(i);//obtengo el caracter en la posicion i de esa palabra.
   
    var caracter2= x.charAt(0);// paso el nombre del boton a un caracter. como solo es una letra pues indico la posicion 0.
    var aux=40*(i);// para recorrer las letras, segun vaya apareciendo.
    var tamañoPalabra= palabraX.length;

    
    contador=0;// primer discriminador para aumentar intento --reinicio el contador para saber que si se encontro un caracter
    if(caracter==x && i==0)
    {    
        var operacion= (153);
       // alert("si esta la letra "+caracter+" en la posicion"+i);
        Lienzo.beginPath();
        Lienzo.font = "bold 24px sans-serif";
        Lienzo.fillStyle = 'white';
        Lienzo.fillText(caracter2,operacion,201);//primer argumento el nombre del boton, en caso de que lo encuentre los demas son la posicion x y Y
        Lienzo.closePath();
        contador=0;
        estado=false;// segundo discriminador --cambio el estado a falso, para saber que si encontro un caracter y asi no aumente un intento.
        aciertos++;
    
    }
    else if(caracter==x)
    {   
        var operacion= (aux+153);
        //alert("si esta la letra "+caracter+" en la posicion"+i);
        Lienzo.beginPath();
        Lienzo.font = "bold 24px sans-serif";
        Lienzo.fillStyle = 'white';
        Lienzo.fillText(caracter2,operacion,201);
        Lienzo.closePath();
         aciertos++;
         contador=0;
         estado=false;//indica que ya encontro ell caracter.


    }
    else if(caracter != x ) // si caracter no esta, aumentara el contador para saber que no hay nada y asi aumentar un intento.
            {

            contador++;
            ///alert("contador esta en "+contador)
                }

    

 }// termina el for
   
 if(aciertos==palabraX.length)
  {
    alert("ganaste! ERES LA VERGA!")

        $("#btn_Q").attr("disabled",true);
        $("btn_Q").removeAttr("disabled");

         $("#btn_W").attr("disabled",true);
        $("btn_W").removeAttr("disabled");

         $("#btn_E").attr("disabled",true);
        $("btn_E").removeAttr("disabled");

         $("#btn_R").attr("disabled",true);
        $("btn_R").removeAttr("disabled");

         $("#btn_T").attr("disabled",true);
        $("btn_T").removeAttr("disabled");

         $("#btn_Y").attr("disabled",true);
        $("btn_Y").removeAttr("disabled");

        $("#btn_U").attr("disabled",true);
        $("btn_U").removeAttr("disabled");

         $("#btn_I").attr("disabled",true);
        $("btn_I").removeAttr("disabled");

         $("#btn_O").attr("disabled",true);
        $("btn_O").removeAttr("disabled");

         $("#btn_P").attr("disabled",true);
        $("btn_P").removeAttr("disabled");

         $("#btn_A").attr("disabled",true);
        $("btn_A").removeAttr("disabled");

         $("#btn_S").attr("disabled",true);
        $("btn_S").removeAttr("disabled");

         $("#btn_D").attr("disabled",true);
        $("btn_D").removeAttr("disabled");

         $("#btn_F").attr("disabled",true);
        $("btn_F").removeAttr("disabled");

         $("#btn_G").attr("disabled",true);
        $("btn_G").removeAttr("disabled");

         $("#btn_H").attr("disabled",true);
        $("btn_H").removeAttr("disabled");

         $("#btn_J").attr("disabled",true);
        $("btn_J").removeAttr("disabled");

         $("#btn_K").attr("disabled",true);
        $("btn_K").removeAttr("disabled");

         $("#btn_L").attr("disabled",true);
        $("btn_L").removeAttr("disabled");

         $("#btn_Ñ").attr("disabled",true);
        $("btn_Ñ").removeAttr("disabled");

         $("#btn_Z").attr("disabled",true);
        $("btn_Z").removeAttr("disabled");

         $("#btn_X").attr("disabled",true);
        $("btn_X").removeAttr("disabled");

         $("#btn_C").attr("disabled",true);
        $("btn_C").removeAttr("disabled");

         $("#btn_V").attr("disabled",true);
        $("btn_M").removeAttr("disabled");

         $("#btn_B").attr("disabled",true);
        $("btn_B").removeAttr("disabled");

         $("#btn_N").attr("disabled",true);
        $("btn_N").removeAttr("disabled");

         $("#btn_M").attr("disabled",true);
        $("btn_M").removeAttr("disabled");

        





  }            
  if(contador!=0 && estado != false ) // en caso de que no se encuentre nada y que  sea verdadero el estado, aumentara el estado.
  {
    aumentar_intento(palabraX);
    $("#marcador").attr('value',8-intento-1);
    intento++;

   
   


  }
 



  
}
//termina la funcion buscar.



function aumentar_intento(palabraX)
{
    var palara_secreta= palabraX;

switch(intento)
    {
        case 0:
        pintarbase();
        break;
       
        case 1:
        pintar_cabeza();
        break;
        
        case 2:
        pintar_cuerpo();
        break;      
        
        case 3:
        pintar_brazo_Izquierdo();
        break;

        case 4:
        pintar_brazo_Derecho();
        break;

        case 5:
        pintar_pierna_Izquierda();
        break;

        case 6:
        pintar_pierna_Derecha();
                break;

        case 7: 
        

        pintar_cuerda();
        pintar_ojo1();
        pintar_ojo2();

        
        alert("perdiste QUE PENDEJO!, la palabra era: "+palara_secreta); // cuanto pinta la cuerda dice que ya perdio.

        break;
       
       

 }//termina switch
}
//termina intentos

 // Aqui las funciones para pintar al monito.

function pintarbase()
{
Lienzo.beginPath();
Lienzo.fillRect(10,250,40,10); //base
Lienzo.fillRect(15,250,10,-200);//palo
Lienzo.fillRect(10,50,80,10);//parte de arriba
Lienzo.fillStyle = 'white';
Lienzo.closePath();
}
//////////////////////////funcion pintar cabeza/////////////////////////////////////////////////////
function pintar_cabeza()
{
Lienzo.beginPath();
Lienzo.arc(85,95,15,0,(Math.PI)*2,true);

Lienzo.fill();
Lienzo.closePath();
}
//////////////////////////funcion pintar cuerpo/////////////////////////////////////////////////////
function pintar_cuerpo()
{
Lienzo.beginPath();
Lienzo.moveTo(85,110);//punto inicial
Lienzo.lineTo(85,190);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //la linea se ace visible con el color del trazo
Lienzo.closePath();

}
//////////////////////////funcion pintar brazo izquierdo/////////////////////////////////////////////////////
function pintar_brazo_Izquierdo()
{
Lienzo.beginPath();
Lienzo.moveTo(85,130);//punto inicial
Lienzo.lineTo(60,150);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();

}
//////////////////////////funcion pintar brazo derecho/////////////////////////////////////////////////////
function pintar_brazo_Derecho()
{
Lienzo.beginPath();
Lienzo.moveTo(85,130);//punto inicial
Lienzo.lineTo(105,150);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();

}
//////////////////////////funcion pintar pierna izquierda/////////////////////////////////////////////////////
function pintar_pierna_Izquierda()
{
Lienzo.beginPath();
Lienzo.moveTo(85,190);//punto inicial
Lienzo.lineTo(70,220);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //
Lienzo.closePath();

}
//////////////////////////funcion pintar pierna derecha/////////////////////////////////////////////////////
function pintar_pierna_Derecha()
{
Lienzo.beginPath();
Lienzo.moveTo(85,190);//punto inicial
Lienzo.lineTo(105,220);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();

}
//////////////////////////funcion pintar cuerda/////////////////////////////////////////////////////
function pintar_cuerda()
{
Lienzo.beginPath();
Lienzo.moveTo(85,50);//punto inicial
Lienzo.lineTo(85,110);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();

}

function pintar_ojo1()
{

Lienzo.beginPath();
Lienzo.moveTo(75,90);//punto inicial
Lienzo.lineTo(85,95);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();


Lienzo.beginPath();
Lienzo.moveTo(85,90);//punto inicial
Lienzo.lineTo(75,95);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();

}
function pintar_ojo2()
{

Lienzo.beginPath();
Lienzo.moveTo(87,90);//punto inicial
Lienzo.lineTo(97,95);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();


Lienzo.beginPath();
Lienzo.moveTo(97,90);//punto inicial
Lienzo.lineTo(87,95);// punto final
Lienzo.lineWidth = 2; //grosor de la linea
Lienzo.strokeStyle = 'white';
Lienzo.stroke(); //l
Lienzo.closePath();

}



});



//pintar_lineas();
/*
pintarbase();
pintar_cabeza();
pintar_cuerpo();
pintar_brazo_Derecho();
pintar_brazo_Izquierdo();
pintar_pierna_Izquierda();
pintar_pierna_Derecha();
pintar_cuerda();
pintar_ojo1();
pintar_ojo2();


/*function buscar2(x)
{
    //si se le dio clic al boton listo, palabra x es igual a entrada sino se queda como esta.
  alert("entro");  
 var x= x;// aqui recibo como parametro x que es el nombre del boton.
   var contador=0;
  var estado=true;
  var palabraI= $("#palabra").val();
   var palabraY= palabraI;//aqui obtengo la palabra elegida al azar

  alert(palabraI);
 
 for(i=0;i<palabraY.length;i++)
 {
     alert("entro al for");
 
    var caracteres= palabraY.charAt(i);//obtengo el caracteres en la posicion i de esa palabra.
    var caracteres2= x.charAt(0);// paso el nombre del boton a un caracteres. como solo es una letra pues indico la posicion 0.
    var aux=40*(i);// para recorrer las letras, segun vaya apareciendo.
    var tamañoPalabra= palabraY.length;
    contador=0;// primer discriminador para aumentar intento --reinicio el contador para saber que si se encontro un caracteres
    if(caracteres3==x && i==0)
    {   
        var operacion= (153);
       // alert("si esta la letra "+caracteres+" en la posicion"+i);
        Lienzo.font = "bold 22px sans-serif";
        Lienzo.fillText(caracteres2,operacion,201);//primer argumento el nombre del boton, en caso de que lo encuentre los demas son la posicion x y Y
        contador=0;
        estado=false;// segundo discriminador --cambio el estado a falso, para saber que si encontro un caracteres y asi no aumente un intento.

 
    }
    else if(caracteres==x)
    {   
        var operacion= (aux+153);
        //alert("si esta la letra "+caracteres+" en la posicion"+i);
        Lienzo.font = "bold 22px sans-serif";
        Lienzo.fillText(caracteres2,operacion,201);
        
         contador=0;
         estado=false;//indica que ya encontro ell caracteres.


    }
    else if(caracteres != x ) // si caracteres no esta, aumentara el contador para saber que no hay nada y asi aumentar un intento.
            {

            contador++;
            ///alert("contador esta en "+contador)
                }

 }// termina el for
   

  if(contador!=0 && estado != false ) // en caso de que no se encuentre nada y que  sea verdadero el estado, aumentara el estado.
  {
    aumentar_intento();
    intento++;
    //alert("intento esta en: "+intento )


  }
  
}//termina la funcion buscar.
*/