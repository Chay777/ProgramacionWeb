        
$(document).ready(function(){

//alert("hola desde jquery");

    $('button').hide('fast');  //aqui esta seleccionando todo elemento h1
    $('button').show('slow');
    $('button').click(function(){
        $(this).hide('slow')
        
        $(this).css('fontSize', '50px');
        $('#consola').html ($(this).css('fontSize'))

        if($(this).css('fontSize')=='50px'){ 
            $(this).css('fontSize', '32px')}

    

        $(this).show('fast')
            



    });

    $('#bt2').click(function(){

        $('#img1').attr('src','img/img2.jpg')
    })





});


       





        function calcula(operacion){
            var operador1 = document.calc.operador1.value;
            var operador2 = document.getElementById("operador2").value;
            //alert(operador1);
            //alert(operador2);
            var result = eval(operador1 + operacion +operador2  );
            document.calc.resultado.value = result;
        }
       
