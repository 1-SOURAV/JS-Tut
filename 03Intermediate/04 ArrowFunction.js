//Arrow Function
var isEven = (val) => {
    return (val % 2 === 0);
}

console.log((isEven(22)));

var result = [2, 5, 6, 8].every(isEven);

console.log(result);

var anotherRes = [2, 5, 8, 10].every((val) => {
    return val % 2 === 0;
})

console.log(anotherRes);