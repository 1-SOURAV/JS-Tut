//Everything is wrapped in global context.
//

tipper(80);

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper(80);

//Error Coming :(
// bigTipper(200);
 
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper(200);

console.log(mname);
var mname = 'Sourav'
console.log(mname);


function temp(){
    var mname = "Temp name";
    console.log(mname);
}
temp();

console.log(mname);