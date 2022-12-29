alert(
  "SpotGames, las mejores ofertas de consolas! Hoy vamos a mostrarte nuestros productos imperdibles para estas fiestas. \n Comencemos!"
);

alert(
  "Para estas fechas, nuestras opciones son:\n 1) Nintendo Switch Oled Precio $170.000 (Incluye 2 juegos a elección). \n 2) Xbox series X Precio $200.000 (Incluye 2 controles) \n 3) PlayStation 5 Precio $270.000 (Incluye suscripción Ps plus por 1 mes)\n"
);

let combo = prompt(
  "¿Con que consola vas a divertirte este verano? (Indicar con número)"
);
let precioAPagar = Number;

switch (combo) {
  case "1":
    precioAPagar = 150000;
    console.log(precioAPagar);
    break;

  case "2":
    precioAPagar = 200000;
    console.log(precioAPagar);
    break;

  case "3":
    precioAPagar = 250000;
    console.log(precioAPagar);
    break;

  default:
    break;
}

console.log(precioAPagar);

alert(
  "Elegí tu método de pago \n En efectivo disponés de un 20% de descuento, mientras que con tarjeta tenés 1, 3 o 6 cuotas sin interes!"
);

let metodoPago = prompt(
  "Entonces ¿Como deseas pagar? (Ingresar la palabra tarjeta o efectivo):"
);
let efectivo = "efectivo" || "Efectivo";
let tarjeta = "tarjeta" || "Tarjeta";
let total = Number;

let descuento = (n1) => {
  return (resultado = n1 - n1 * 0.1);
};
let cuota1 = (n1, n2) => {
  return (resultado = n1 / n2);
};
let cuota3 = (n1, n2) => {
  return (resultado = n1 / n2);
};
let cuota6 = (n1, n2) => {
  return (resultado = n1 / n2);
};

if (efectivo == metodoPago) {
  total = descuento(precioAPagar);
  alert("Tu monto total a abonar es $" + total);
  console.log(total);
} else if (tarjeta == metodoPago) {
  let cuotas = prompt(
    "¿En cuantas cuotas vas a dividir tu costo? ¿1, 3 o 6? (respuesta con numeros)."
  );
  switch (cuotas) {
    case "1":
      total = cuota1(precioAPagar, 1);
      alert(
        "El importe total a pagar es de $" +
          precioAPagar +
          ", en 1 cuota de $" +
          total
      );
      console.log(total);
      break;

    case "3":
      total = cuota3(precioAPagar, 3);
      alert(
        "El importe total a pagar es de $" +
          precioAPagar +
          ", en 3 cuotas de $" +
          total
      );
      console.log(total);
      break;

    case "6":
      total = cuota6(precioAPagar, 6);
      alert(
        "El importe total a pagar es de $" +
          precioAPagar +
          ", en 6 cuotas de $" +
          total
      );
      console.log(total);
      break;

    default:
      break;
  }
}

alert("A continuación, te pediremos algunos datos para tomar tu pedido");

let nombre = prompt("Nombre.");
let apellido = prompt("Apellido");
const dni = prompt("DNI (sin comas ni puntos)");
let direccion = prompt("Direción de calle");
const ciudad = prompt("Ciudad");
let entrega = prompt(
  "Quien desees que entregue tu pedido (correo argentino, fedex, mercadolibre)."
);

alert(
  "El pedido esta hecho a nombre de " +
    nombre +
    " " +
    apellido +
    " con DNI n°" +
    dni +
    " y dirección " +
    direccion +
    " en la ciudad de " +
    ciudad +
    "."
);
alert(
  "Gracias por tu compra! Te llegará en las próximas 48 horas hábiles por " +
    entrega +
    "."
);
