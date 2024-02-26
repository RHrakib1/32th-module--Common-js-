// j jinins gula declear krbo segula k parameter bola hoi example : function sum(a,b,c){}
// function call korar jonno j jinis gula pathabo take arrguments bole


// arrguments sudhu function er modhe use krte parbo bahir a use kora jabe na...arrg er index janar jonno array er moto arrguments[3] ai vabe dite hoi niche dekhano holo

function sum(a, b, c) {
    console.log(arguments[3]);
    const total = a + b + c;
    return total;
}
const stor = sum(4, 5, 6, 10, 50, 40);
console.log(stor);



// args k obj theke array te paoyar jonno "const args =[...arguments]; "use kora hoi
function sum1(a, b, c) {
    const args =[...arguments]; 
    console.log(args);
    const total1 = a + b + c;
    return total1;
}
const stor1 = sum1(44,82,60, 10, 50, 40);
console.log(stor1);


// kono function print er por jodi ".length pai tahole" sei function a koy ta parameter deoya ase seta bujhabe 
function sum2(a, b, c) {
    const args =[...arguments]; 
    console.log(args);
    const total1 = a + b + c;
    return total1;
}
const stor2 = sum2(44,82,60, 10, 50, 40);
console.log(sum2.length);