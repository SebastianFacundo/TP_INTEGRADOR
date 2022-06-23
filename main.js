
var botonResumen= document.getElementById("resumen");
var totalValor= document.getElementById("total");
var botonBorrar=document.getElementById("borrar");
const precio=200;




function precioFinal(){
    var cantidad=(document.getElementById("cantidad").value);

    var descuentoCategoria=(document.getElementById("categoria").value);
 

    totalValor.value="Total a pagar: $ "+(cantidad*(precio-(precio*descuentoCategoria)));
  

}


botonResumen.addEventListener("click",precioFinal);






