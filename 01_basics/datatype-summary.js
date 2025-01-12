             // primitive datatypes


//  it has 7 types 
// jb isko cOPY KRTE hain to memory ka reference nahi dia jata
//  or jo b changes hote hian wo copy me changes hote hain 
// string , number , boolean, null, undefined, symbol, BigInt



const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id===anotherId);



                // refernce type(non primitive)
// memory ka refernce dia jata hai
// array, objects, functions


const myheros =["superman", "batman"];

//object 

let myObj= {
myName:"Ayaz",
myAge: 21,
}
// null ka datatype object hota hai or function ka object function 
//  arrays ka data type object hota hai


// function

  const myfunction = function(){
    console.log("hello");
    
  }




