/**
 * undifind kkhn kkhn pabp
 * 1: variavble er man jokhn na diyei console.log () kora hbe
 * 2: function a jodi return na kora hoi tahole undifind dekhabe 
 * 3: parameater a j koyta variable thakbe agr a jodi j koyta na thake tahole undifind dekhbe  
 * 4: sudhu return keyword likhar pore kono kisu na likhle seta te undifind dibe 
 * 5: jodi kono akta obj er proparty na thake ba array er index na thake  kintu console.log() er somoy oi propary dile seta na thakar karone default vab eundifind dekhabe  
 */

// 1 example
let first;
console.log(first);

// 2 example
function second(a, b) {
    const total = a + b
}
const reult = second()
console.log(reult);

// 3 example
function thard(a, b, c, d) {
    const add = a + b + c + d;
    console.log(a, b, c, d);
}
thard(2, 4);

// 4 example 
function nagative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    else {
        return;
    }
}
const nev = nagative(5, 4);
console.log(nev);

// 5 example
console.log('example 5 ');
const students = { name: 'hasan', roll: 511100, reg: 1204504 }
console.log(students.roll, students.salary);



// jodi kthao dekhaite hoi j kono jinis n ai tahole amra null use krbo

const sixth = null;
const teacher = { name: [], update: null } 