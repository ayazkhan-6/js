function sayMyName(){
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




function twonumbers(number1, number2){

    let result = number1+number2
    return result
}

 const result = twonumbers(5,7)
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
    console.log(userloggin());          // Will log "Please enter a valid name"
    console.log(userloggin(""));        // Will log "Please enter a valid name"
    console.log(userloggin("John"));    // Will return "John just logged in"
    
    
    