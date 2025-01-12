// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// date ki type bhi object hai


//  let myCreatedDate = new Date("2-1-2025")
// // console.log(myCreatedDate.toDateString());



// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleDateString('default',{
    weekday: "long",
    
})