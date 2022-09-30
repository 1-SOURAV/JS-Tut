var listPrice = 799;
var sellingPrice = 199;

var discount = (listPrice - sellingPrice) / listPrice * 100;

var str = Math.round(discount) + "% discount."
console.log(typeof str);