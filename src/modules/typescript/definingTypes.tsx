//To create an object with  an inferred type wich includes name:string and id: number
//you can write

/*const user={
    name:"HAYES",
    id:0
}
*/

//you can explicitly describe this object's shape using an interface declaration

interface User{
    name:string;
    id:number;
}

//You can then declare that a JS object conforms to the shape of your new 
//interface by using syntax like:TypeName after a variable declaration:

const user:User={
    name:"HAYES",
    id:0,

}
//you can use interfaces to annotate parameters and returns values to functions

function deleteUser(user:User){
    //...
}

function getAdminUser():User{
    return user
}

//Primitive types
//boolean, bigint, null, number, string , symbol and undefined

//Typescript extends this list:
//unknown
//never (it's not possible that this type could happen)
//void (a function which returns undefined or has no return value)
//any allow anything
