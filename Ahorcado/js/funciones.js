$(document).ready(function(){

//alert("hola desde jquery");

    $('button').hide('fast');  //aqui esta seleccionando todo elemento h1
    $('button').show('slow');
    $('h1').click(function(){
        $(this).hide('slow')
        
        $(this).css('fontSize', '50px');
        $('#consola').html ($(this).css('fontSize'))

        $(this).show('fast')
            



    });

    

        $('#img1').attr('src','img/img2.jpg')
    })