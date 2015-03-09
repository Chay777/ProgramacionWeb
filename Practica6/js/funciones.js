function calcula(operacion){
            var Cantidad = document.calc.Cantidad.value;
            var Meses = document.getElementById("Meses").value;
            var porc1 = 0.01;
            var porc2= 0.02;
            var porc3= 0.03;
            var suma= "+";

            if ( Meses>=1 && Meses<=3) {

                var result = eval(Cantidad + operacion + porc1)
                document.calc.resultado.value = result;
             } else  

             if ( Meses>=4 && Meses<=7) {

                var result = eval(Cantidad + operacion + porc2)
                document.calc.resultado.value = result;
             } 
             
             else  if ( Meses>=8) {

                var result = eval(Cantidad + operacion + porc3)
                document.calc.resultado.value = result;
             } 
             
                  var total = eval(result + suma + Cantidad)
                document.calc.Total.value=total

                };