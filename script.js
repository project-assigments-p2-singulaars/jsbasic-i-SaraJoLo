//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log('Bienvendia al bootcamp P2 Juniors (BRC Singulars) de Factoria F5 Hola mundo')



//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
let string = "Hola Mundo";
let number = 23;
let boolean = true;
// let null = null;
let undefined = undefined;
let object = { key: "value" };
let array = [1, 2, 3];

console.log(string);
console.log(number);
console.log(boolean);
// console.log(null);
console.log(undefined);
console.log(object);
console.log(array);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = ["helado", "tarta", "pastel"];
console.log(postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
const coder = { nombre: "Juana", edad: 25 };
console.log(coder);



//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof object);
console.log(typeof array);



//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let sumar = 5 + 3;
console.log(sumar);



//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let restar = 4-3;
console.log(restar)



//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let multiplicacion = 6 * 9;
console.log(multiplicacion);



//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let division = 20 / 5;
console.log(division);



//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let variableUno = 1;
let variableDos = 2;




// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
let comparacion1 = variableUno === variableDos;
console.log(comparacion1);



//Ejercicio 11: completa el ejercicio
let num1 = 15
let num2 = 20

let comparacion = num1 == num2 
/*Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
console.log(comparacion)

//Ejercicio 12: completa el ejercicio

let num3 = 1;
let numAsString = "1";

let result = num3 == num3AsString
//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 


//Ejercicio 13: completa el ejercicio

let result2 = num3 == num3AsString;
//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS

let nombre = "Sara ";
let apellido = " Jolo";
let nombreCompleto = nombre + apellido;
console.log(nombreCompleto)




//OPERADORES DE LÓGICA


let a = 6;
let b = 3;

let res =  a < 10 && b > 1 
console.log(res)

let res2 = a < 10 & b < 1

console.log(res2)

let res3 = a == 5 || b == 5 
console.log(res3)

let res4 = a == 6 || b == 0
console.log(res4)

let res5 = a == 0 || b == 3;
console.log(res5)

let res6 = a == 6 || b == 3;
console.log(res6) 
