 const cupones = [
     "shein", "vision", "starbucks", "eleven", "reebok"
 ]


 function calculoDescuento(precioOriginal, descuentoAplicar){
    precio = parseFloat(precioOriginal);
    descuento = parseFloat(descuentoAplicar);
    resultado = (precioOriginal * (100 - descuento)) / 100;
    document.getElementById("respuesta").innerText = "El precio a pagar por el producto es: " + resultado;
 }


function precioConDescuentoManual(precioOriginal, descuentoAplicar, descuentoCupon){
    if(descuentoCupon == 0){
        calculoDescuento(precioOriginal, descuentoAplicar);
    }
    else{
        calculoDescuento(precioOriginal, descuentoCupon);
    }
}


function calcularPrecioConDescuento(){
    precioOriginal = document.getElementById("precio").value;
    descuentoAplicar = document.getElementById("descuento").value;
    descuentoCupon =  document.getElementById("cupon").value.toLowerCase();

    if(precioOriginal.length == 0){
        alert("Es obligatorio poner el precio");
    }
    else if(descuentoAplicar.length == 0 && descuentoCupon.length == 0){
        alert("Debes colocar un descuento manual o un cupón");
    }
    else if(descuentoAplicar.length >= 1 && descuentoCupon.length >= 1){
        alert("No puedes colocar un descuento manual y un cupón");
    } 
    else if(descuentoAplicar.length >= 1){    
        precioConDescuentoManual(precioOriginal, descuentoAplicar, 0);
    }
    else {
        switch(descuentoCupon){
            case cupones[0]:
                descuentoCupon = 10;
                break;
            case cupones[1]:
                descuentoCupon = 15;
                break;
            case cupones[2]:
                descuentoCupon = 25;
                break;
            case cupones[3]:
                descuentoCupon = 30;
                break;
            case cupones[4]:
                descuentoCupon = 70;
                break;    
            default:
                alert("El cupón ingresado es incorrecto!");
        }
        precioConDescuentoManual(precioOriginal, descuentoAplicar, descuentoCupon);
    }
}