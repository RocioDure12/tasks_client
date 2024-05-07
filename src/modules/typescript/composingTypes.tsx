//with typescript you can create complex types by combining simple ones. There are
//two popular ways to do so: with unions and with generics.

type Mybool=true | false;

//A popular use-case for union types is to describe the set of string or number 
//literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//Unions provide a way to handle different types too. 
//For example, you may have a function that takes an array or a string:

let matriz: string[] = ["manzana", "plátano", "naranja"];

let cadena: string = "Hola, mundo!";

function getLength(obj:string | string[]){
    return obj.length
}

console.log("Matriz ",getLength(matriz))//output 3
console.log("Cadena",getLength(cadena)) //output 12




