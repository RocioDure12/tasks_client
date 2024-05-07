//Generics provide variables to types. A common example is an array.
// An array without generics could contain anything. An array with generics
// can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

//You can declare your own types that use generics:

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.

declare const backpack:Backpack<string>


function identity<T>(arg: T): T {
    return arg;
}

// Uso de la función identity con un tipo de cadena
let output1 = identity<string>("Hola");
console.log(output1); // Output: Hola

// Uso de la función identity con un tipo numérico
let output2 = identity<number>(100);
console.log(output2); // Output: 100


