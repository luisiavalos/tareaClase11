var topping = prompt("Ingrese el topping deeseado para su helado, las opciones son oreo, kitkat o kinder");
var precio;
var precioFinal;
var helado = 200;

if(topping=="oreo"){
    precio = 10;
} else if(topping=="kitkat"){
    precio = 15;
}else if(topping=="kinder"){
    precio = 25;
}else{alert("TOPPING NO DISPONIBLE, su helado va sin topping");
 precio = 0
 }

precioFinal = helado + precio;

alert("Usted deberá abonar $" + precioFinal " por su helado.");
