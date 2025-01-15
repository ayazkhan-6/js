 // singleton object
// const tiinderuser = new Object()

// non singleton object
const tinderuser = {}

tinderuser.id = "123abc",
    tinderuser.name = "Ayaz"
tinderuser.isLoggedin = false;

// console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",

    fullname: {
        firstname: "ayaz",
        lastname: "khan"
    }

}
// console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
// const obj3 = console.log(Object.assign(obj1, obj2));
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "q@gmal.com"
    },
    {
        id: 1,
        email: "q@gmal.com"
    },
    {
        id: 1,
        email: "q@gmal.com"
    },
]
user[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// // console.log(tinderuser.hasOwnProperty('isLogged'));




// ++++++++++++++++++++++++++++++++++++++++++destructuring

const course = {
    coursename: "web developing",
    price: 999,
    teacher: "ayaz"
}
// course.teacher
// is method se bar bar course k aage dot lagani ki zroort ni prti
// or : lgaa k name change b kr skte object ka jese
// const object1: object2 = course
const { coursename } = course

console.log(coursename);







