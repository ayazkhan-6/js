function sayMyName() {
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("Z");

}
// sayMyName()

// function addtwonumbers(num1,num2){
//     console.log(num1+num2);

// }
// addtwonumbers(9,3)




function twonumbers(number1, number2) {

    let result = number1 + number2
    return result
}

const result = twonumbers(5, 7)
// console.log("Result", result);


function userloggin(username) {
    if (username === undefined || username === "") {
        console.log("Please enter a valid name");
        return; // Exit the function if username is invalid
    } else {
        return `${username} just logged in`;
    }
}

// Test the function
// console.log(userloggin());          // Will log "Please enter a valid name"
// console.log(userloggin(""));        // Will log "Please enter a valid name"
// console.log(userloggin("John"));    // Will return "John just logged in"


// ++++++++++++++++++REST OPERATOR+++++++++++++

// rest operator b spread ki trh indicate hota hai mgr ye elements ko jor kr array ki form me wapis krta h

function calculate(...num1) {
    return num1
}
// console.log(calculate(100, 200, 500));


// val1 or val2 ke andr 100 or 200 store hogyi or baqi array ki form me thi to output milgyii

function arrange(val1, val2, ...n1) {
    return n1

}
// console.log(arrange(100, 200, 400, 500));





const user = {
    name: "ayaz",
    price: 199
}
function tocall(anyObject) {
    console.log(`Username is   ${anyObject.name} and price is ${anyObject.price}`);


}
// calling an function
// tocall(user)



// ++++++++++++++++++++direct object pass krna
// tocall({
//     name: "khan",
//     price: 400
// })




// ++++++++++++++++++++++++++array pass krna

const myArray = [200, 600, 800]
function tocallArray(getArray) {
    return getArray[0]

}

console.log(tocallArray(myArray))
