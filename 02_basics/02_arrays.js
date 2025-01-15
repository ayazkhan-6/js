const my_heros = ["superman", "batman ", "spiderman"]
const my_villains = ["hulk", "captain_america", "flash"]
// my_heros.push(my_villains)
// console.log(my_heros);

// console.log(my_heros[3][1]);

// +++++++++++++++++++++++++concatination+++++++++++++++++++++++++
// iske andr aik naya variable lete hain or phir 2 purane variable ko concat krte hain


const myPov = my_heros.concat(my_villains)
// console.log(myPov);


// +++++++++++++++=spread method

const myPov2 = [...my_heros, ...my_villains]
// console.log(myPov2);



// +++++++++++++++++flat method for merging multiple arrays
const anotherArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const realanotherArray = anotherArray.flat(Infinity);
// console.log(realanotherArray);


// console.log(Array.isArray("ayaz"));
// console.log(Array.from("ayaz"));



//  intersting  hamen pehle btana hoga k keys ka array bnana hai ya value ka otherwise output "[]" ye hoga
// console.log(Array.from({ name: "ayaz" }));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
















