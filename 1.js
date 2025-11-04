// Suma los números pares en un arreglo.
let arreglo = [1,5,2,6,7,1]
let total = 0
for (i = 0; i<arreglo.length; i++){
    if (arreglo[i] % 2 ==0) {
        total += arreglo[i]
       
    }
}
console.log(total);

//Invierte una cadena
let ca = "Hola esta es la cadena"
let cadenainvetida = ""
for ( let i = ca.length -1; i>=0; i--) {
    cadenainvetida += ca[i];
}
console.log(cadenainvetida);

//Cuenta las vocales en una cadena
let sumaVocal = 0;
for (i = 0; i<=ca.length; i++){
    if(ca[i] == "a" || ca[i]=="e" || ca[i]=="i"  || ca[i]=="o" || ca[i]=="u"  ){
        sumaVocal +=1
        
    }
}
console.log(sumaVocal)

// Encuentra el número más pequeño en un arreglo.
let numeroMayor =0;
for (i =0; i<arreglo.length; i++){
    if(arreglo[i]>numeroMayor){
        numeroMayor=arreglo[i]
    }
}
console.log(numeroMayor)

// Verificar si un número es primo.
let numero = 9;
let contador = 0;

if (numero <= 1) {
  console.log("No es primo");
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      contador++;
    }
  }

  if (contador === 0) {
    console.log("Es primo");
  } else {
    console.log("No es primo");
  }
}
// Concatena dos arreglos
let array1 = [1, 2, "Hola"]
let array2 = [6, 8, "Adios" ]
let resultado = array1.concat(array2)
console.log(resultado) // [1, 2, "Hola", 6, 8, "Adios"]

// Encuentra el número máximo en un arreglo.
let numeromax = 0
for( i = 0; i<= arreglo.length; i++){
  if (arreglo[i]>numeromax){
    numeromax =arreglo[i]
  }
}
console.log(numeromax)

// Identifica declaraciones válidas de variables en JavaScript

// Comprender el operador typeof con null.
let nulo = null
console.log(typeof(nulo)) // Object

// Identifica el método correcto de conversión de JSON.

// Calcule la suma máxima de una subarreglo contiguo.

/*Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100. */
let precio = 12
let iva = 10
let preciototal = precio + (precio *(iva/100))
console.log(preciototal)

/* En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados. */
let lado = 3
let area = lado * lado
let perímetro = lado + lado + lado + lado
console.log(area)
console.log(perímetro)

/* Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */
let nombre = "Juan"
console.log("Hola " + nombre)
/*En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */
let number1 = 12
let number2 =84 
let number3 = 42
let media = (number1+number2+number3)/3
console.log(media)

/* Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */
let km = 100
let litrosConsumidos = 37
let consumoCombustible = litrosConsumidos/km
console.log("El consumo por km es: " + consumoCombustible)
/* Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 60 minutos y cada minuto son 60 segundos. */
let horas = 1;
let minutos = 20;

let totalMinutos = (horas * 60) + minutos;
let segundos = totalMinutos * 60;

console.log(`Total en segundos: ${segundos}`);

/* En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades */
let digito = 12
let decenas = Math.floor(digito / 10)
let unidades = digito % 10
console.log("Decenas: " + decenas)
console.log("Unidades: " + unidades)

/*
Una tortilla de patatas lleva 200 gramos de patatas por persona.
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */
let gramospapa = 200
let gramoscebolla
let huevos
let comensales = 2
let gramosPapaNecesarios = gramospapa * comensales;
let gramoscebollaNecesarios = (gramosPapaNecesarios /1000) * 300
let huevosNecesarios = (gramosPapaNecesarios /1000) *5
console.log("Para "+ comensales + " comensales " + "necesitaremos " + gramosPapaNecesarios + " de patatas " + gramoscebollaNecesarios + " gramos de cebolla y " + huevosNecesarios + " huevos" )

/* Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.
Tienes que escribir un programa que intercambie el valor de dos variables.
Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. No vale usar arrays ni asignación múltiple */
let variable1 = 3
let variable2 = 7
let variableTemporal
if(variable1 != variable2) {
  variableTemporal = variable1
  variable1 = variable2
  variable2 = variableTemporal
 console.log(variable1,variable2,variableTemporal)
}
/* Pues seguimos con los números. Escribe un script  que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */
let number = 4
let verdadero =(number % 2 ==0)
console.log(verdadero)
