// let nombre = "CODER"
// let apellido = "HOUSE"

// let edad = 8

// let numero1 = 2022
// let numero2 = 2030
// let resultado = numero1 + numero2

// const curso = "JavaScript"

//Prompt
// let nombreCompleto = prompt("Ingresa tu nombre:")
// alert("Nombre ingresado: " + nombreCompleto)

//let resultado1 = confirm("¿Está seguro de instalar Windows 95?")

// console.info("Hola como estas?")
// console.warn("Checar este codigo")
// console.error("Ahora si me tienes que dar bolilla")

// let username = prompt("Ingrese su nombre de usuario: ");

// if (username == "CoderHouse") {
//   console.log("Bienvenido", username);
// } else {
//     console.warn("No se reconoce el usuario");
// }

// *** IF - ELSE IF ***

// let miOferta = prompt("Ingrese su oferta económica: ")

// miOferta = parseInt(miOferta) //Lo convertimos a entero

// if (miOferta < 22) {
//     console.error("Su oferta es demasiado baja")
// } else if (miOferta < 30) {
//     console.warn("Deberias estirarte un poco más")
// } else if (miOferta < 50) {
//     console.warn("Estás cerca. Estirate un poco más")
// } else {
//     console.log("Su oferta es de nuestro interes")
// }

// *** Boolean ***

// let confirma = confirm("¿Desea reemplazar su S.O. por Windows 95?")

// if (confirma) {
//     console.log("Instalando Windows 95...")
// } else {
//     console.log("Sus archivos están a salvo.")
// }

// *** Compuertas Lógicas ***

// *** CICLOS ***

debugger;

// Conteo desde 0 a 21

// for (let i = 0; i <= 21; i++){
//     console.log("Conteo Nro.", i)
// }

// let limite = parseInt(prompt("Ingrese un número de 2 a cifras: "))

// for (let i=0; i<limite; i++){
//     if (i == 5) {
//         continue
//     }
//     console.log("Conteo nro.", i);
// }

// *** WHILE ***

// let entrada = prompt("Ingresa un dato: ");

// while (entrada != "ESC") {
//     alert("El usuario ingreso " + entrada);

//     entrada = prompt("Ingresar otro dato")
// }

// let repetir = true;

// while (repetir) {
//     let nro = parseInt(prompt("Ingrese un número mayor a 21: "))
//     if (nro >= 21) {
//         repetir = false;
//         console.log("Al fin! XD", nro)
//     }
// }

// let repetir = false;

// do {
//     let nro = parseInt(prompt("Ingrese un número mayor o igual a 21: "))
//     if (nro >= 21) {
//         repetir = false;
//         console.log("Al fin! XD", nro)
//     }
// }while(repetir)

// *** SWITCH ***

// let color = prompt("Elija un color de prenda")

// switch (color) {
//     case "white":
//         console.log("Tenemos en stock el color", color)
//         break;
//     case "red":
//         console.log("Tenemos en stock el color", color)
//         break;
//     case "black":
//         console.log("Tenemos en stock el color", color)
//         break;
//     default:
//         console.warn("No trabajamos ese color")
//         break;
// }

// ************** TAREA 1 ******************
// let num1, num2, resultado, opc, respuesta

// do {
//     opc = parseInt(prompt("*** Bienvenido a tu nueva calculadora ***\n"+
//         "Por favor ingresa el numero de operación que deseas realizar: \n" +
//         "1 - Suma \n" +
//         "2 - Resta \n" +
//         "3 - Multiplicacion \n" +
//         "4 - División \n" +
//         "5 - Módulo \n"))
//     switch (opc) {
//         case 1:
//             num1 = parseInt(prompt("Ingrese el valor del primer numero: "))
//             num2 = parseInt(prompt("Ingrese el valor del segundo numero: "))
//             resultado = num1 + num2;
//             console.log("El resultado de la suma es: ", resultado)
//             break;
//         case 2:
//             num1 = parseInt(prompt("Ingrese el valor del primer numero: "))
//             num2 = parseInt(prompt("Ingrese el valor del segundo numero: "))
//             resultado = num1 - num2;
//             console.log("El resultado de la resta es: ", resultado)
//             break;
//         case 3:
//             num1 = parseInt(prompt("Ingrese el valor del primer numero: "))
//             num2 = parseInt(prompt("Ingrese el valor del segundo numero: "))
//             resultado = num1 * num2;
//             console.log("El resultado de la multiplicación es: ", resultado)
//             break;
//         case 4:
//             num1 = parseInt(prompt("Ingrese el valor del primer numero: "))
//             num2 = parseInt(prompt("Ingrese el valor del segundo numero: "))
//             resultado = num1 / num2;
//             console.log("El resultado de la division es: ", resultado)
//             break;
//         case 5:
//             num1 = parseInt(prompt("Ingrese el valor del primer numero: "))
//             num2 = parseInt(prompt("Ingrese el valor del segundo numero: "))
//             resultado = num1 % num2;
//             console.log("El resultado de la operacion modulo es: ", resultado)
//             break;
//         default:
//             console.warn("No contamos con esa operación, intentelo de nuevo!!")
//             break;
//     }
//     respuesta = parseInt(prompt(
//       "¿Desea realizar otra operación?: \n" +
//         "1 - Si \n" +
//         "2 - No \n"
//     ));
// } while (respuesta < 2);

// *** TAREA 2 ***

// Este programa será una tienda de videojuegos

// Clase videojuego
class Juego {
  constructor(
    id,
    nombre,
    genero,
    precioReal,
    precioDescuento,
    stock,
    disponible
  ) {
    this.id = id;
    this.nombre = nombre;
    this.genero = genero;
    this.precioReal = precioReal;
    this.precioDescuento = precioDescuento;
    this.stock = stock;
  }
  descontarStock(cantidad) {
    this.stock -= cantidad;
  }
}

//Aqui vamos a instanciar y cargar nuevos videojuegos

let juego1 = new Juego(0, "Resident Evil", "terror", 1200, 300, 5);
let juego2 = new Juego(1, "Crash", "aventura", 1000, 200, 3);
let juego3 = new Juego(2, "El señor de los anillos", "accion", 1000, 200, 3);

let Juegos = [];
Juegos.push(juego1);
Juegos.push(juego2);
Juegos.push(juego3);

let respuesta, opc;

do {
  opc = parseInt(
    prompt(
      "*** Bienvenido a tu nueva calculadora ***\n" +
        "Por favor ingresa el numero de operación que deseas realizar: \n" +
        "1 - Mostrar lista de videojuegos disponibles \n" +
        "2 - Filtrar videojuegos por genero \n" +
        "3 - Comprar un videojuego"
    )
  );

  switch (opc) {
    case 1:
      console.table(Juegos);
      break;
    case 2:
      let nJuego = prompt(
        "Escribe el nombre del genero: \n" +
          "1 - Aventura \n" +
          "2 - Accion \n" +
          "3 - Terror"
      ).toLowerCase();
      let encontrar = Juegos.filter((juego) => juego.genero == nJuego);
      console.table(encontrar);
      break;
    case 3:
      console.table(Juegos); // Se mostraran los juegos disponibles en consola
      let id = parseInt(
        prompt("Ingrese el numero de id del videojuego que desea comprar: ")
      );
      cantidad = parseInt(
        prompt("Ingrese el numero de copias que desea comprar: ")
      );
      //   Juegos[id].descontarStock(cantidad);
      //       console.log(Juegos);
      if (Juegos[id].stock > 0 && Juegos[id].stock >= cantidad) {
        Juegos[id].descontarStock(cantidad);
        console.table(Juegos);
        alert(
          "Felicidades su compra se realizo con exito, en breve nos pondremos en contacto con usted"
        );
      } else if (Juegos[id].stock == 0) {
        alert("No tenemos el producto disponible por el momento");
      } else {
        alert("No tenemos el numero de copias solicitado");
      }
      break;
    default:
      console.warn("No contamos con esa operación, intentelo de nuevo!!");
      break;
  }
  respuesta = parseInt(
    prompt("¿Desea realizar otra operación?: \n" + "1 - Si \n" + "2 - No \n")
  );
} while (respuesta < 2);
