/**
 * truthy:
 * 1 : jodi true hoi tahole true hbe  
 * 2 : j kono number hole (-,+) true hbe '0' bade   
 * 3 : j kono string true hbe  
 * 4 : " " hole true hbe karon akhane majhe space ase 
 * 5 : {},[]
 * 
 * 
 * falsy:
 * 1 : jodi false likhi tahole false pabo
 * 2 : 0 hole false hbe
 * 3 : "" emty string hole false hbe 
 * 4 : undifind ,null
 */



// f-1
const x = false;
if (x) {
    console.log('the x is truthy');
}
else {
    console.log('the x is falsey');
}


// t-1
const x1 = -5;
if (x1) {
    console.log('the x is truthy');
}
else {
    console.log('the x is falsey');
}


// optional
// false chake
const z = null;
if (!z) {
    console.log('the z is false');
}



// true chake
const w =' ';
if(!!w){
    console.log('the w is a true');
}