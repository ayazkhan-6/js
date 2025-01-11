const accountId = 20
let accountEmail = "ayaz@gmail.com"
var accountPassword = "1234"
accountCity = "Lahore"
let accountState;

// accountId = 2;
 accountEmail = "abc@gmail.com"
 accountPassword = "127834"
accountCity = "delhi"
console.log(accountId);

/*
dont use var due to issue of block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])