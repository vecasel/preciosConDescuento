var amount = document.getElementById("cantidad");
var percentage = document.getElementById("porcentaje"); 
var codigo = document.getElementById("codigo");
const form = document.getElementById("form");


function operacion(cantidad, descuento){
    calculo = cantidad * (100 - descuento) / 100;
    form.reset();
    alert("La cantidad a pagar es: " + calculo);
}



function calcularDescuento(){
    let coleccion = [
        "DANIEL",
        "FERNANDO",
        "KELLY",
        "ANDREA",
        "JEFFERSON",
    ]
    switch(true){
        case amount.value.length < 1:
            alert("Debes colocar la cantidad");
            break;
        case percentage.value.length < 1 && codigo.value.length < 1:
            alert("Debes colocar el descuento deseado.");
            break;
        case percentage.value.length >= 1 && codigo.value.length >=1:
            alert("Solo puedes poner una forma de descuento.");
            break;
        default:
            if(percentage.value.length >= 1){
                operacion(parseInt(amount.value), parseInt(percentage.value));
                form.reset();
            }
            else{
                switch(true){
                    case codigo.value.toUpperCase() == coleccion[0]:
                        operacion(parseInt(amount.value), 10);
                        break;
                    case codigo.value.toUpperCase() == coleccion[1]:
                        operacion(parseInt(amount.value), 20);
                        break;
                    case codigo.value.toUpperCase() == coleccion[2]:
                        operacion(parseInt(amount.value), 30);
                        break;
                    case codigo.value.toUpperCase() == coleccion[3]:
                        operacion(parseInt(amount.value), 40);
                        break;
                    case codigo.value.toUpperCase() == coleccion[4]:
                        operacion(parseInt(amount.value), 50);
                        break;
                    default:
                        alert("El código no está en la base de datos");
                }
            } 
    }
}