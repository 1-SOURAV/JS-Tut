var arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((s) => (console.log(s)))
// arr.forEach((val) => {console.log(val);})

var compnayName = ['meta', 'amazon', 'apple', 'netflix', 'google'];
/*
for(const name of compnayName){
    console.log(name);
}
*/

const user = {
    fName: "sourav",
    lName: "sharma",
    age: 19,
    placed: true
}


//For in is used to print the keys from key-value pair or idx in arrays
for(const info in user){
    console.log(info);
}