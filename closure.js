// akta function theke jodi r akta function k return kori tahole tar nijosso akta closure make krbe

// closure er kaj holo vitor er fuction theke bahir er function er kono kisu access kora 

// kono akta function er vitor theke r akta function return krle j function return kora hbe seta opor er function a ja ja use hoise ta access krte parbe 
function kitchen(){
    let rost =0;
    return function(){
        rost++;
        return rost;
    }
}
const server = kitchen();
console.log(server());
console.log(server());
console.log(server());
console.log(server());


