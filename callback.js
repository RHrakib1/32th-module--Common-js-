// kono akta function er parameter hisabe akta function k pathaite pari and vitor a call kora hole ake callback function bole 

function grating(gratingHandler, name) {
    gratingHandler(name);
}

function gratingHandler(name) {
    console.log('good morning night', name);
}
function gratnight(name){
    console.log('hello night for',name);
}


grating(gratingHandler, 'rakib');
grating(gratingHandler, 'hasan');
grating(gratingHandler, 'torabi');
grating(gratnight,'torabi rahman');
grating(gratnight,'i love you');



