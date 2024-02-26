// premitive type er khetre jodi amra function k call kore kono man change kori tahole kono man change hbe na 
let number = 10;
let number2 = 20;
function add(a, b) {
    a = 40;
    const result = a + b;
    return result;
}
console.log(number);
add(number, number2);
console.log(number);







// non-premitive type er khetre kono man jodi change kori tahole function jekhane call hoise tar por change kora man k print krle output change hbe 
let students1 = { name: 'rakib', patner: 'tarin' };
let students2 = { name: 'hasan', patner: 'torabi' };
function makeLife(couple1, couple2) {
    couple1.name = 'rakib hasan';
    couple2.patner = "torabi rahman";

}
console.log(students1, students2);
makeLife(students1, students2);
console.log(students1, students2);
