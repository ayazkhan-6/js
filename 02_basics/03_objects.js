// constructor method  iske andr singleton bnta hai
Object.create

// object literals

const mySym = Symbol("mykey1")
// symbol ko square brackets me hi likhe ge object me
// or access square notation waale method se hoga

const jsuser = {
    name: "ayaz",
    "fullname": "muhammad ayaz",
    [mySym]: "key1",
    age: 21,
    location: "mian channu",
    email: "ayaz@gmail.com"

}
// method 1 of accesing object
// console.log(jsuser.email);

// method 2 of accessing objects is method ko square notation bolte hain
//  agr object "fullname : muhammad ayaz" is trh hai to isse dot lga kr acces ni  kr skte
//  tb square notaion se hi object access hoga



// 
// console.log(jsuser["email"]);
// console.log(jsuser[mySym]);



// objects ki value ko change krne k lye 

jsuser.email = "khan@gmail.com"
// console.log(jsuser);

// agr object ko changing se rokna ho to poore object ko freeze krdenge 

// Object.freeze(jsuser)
jsuser.name = "ayazkhan"
// console.log(jsuser);


jsuser.greeting = function () {
    console.log("hey js users");

}
console.log(jsuser.greeting());


jsuser.greeting2 = function () {
    console.log(`hello, ${this.fullname}`);

}
console.log(jsuser.greeting2());






