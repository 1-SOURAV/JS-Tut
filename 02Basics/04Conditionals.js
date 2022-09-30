var age = prompt("Enter your age: ");

var text;

if(age >= 18){
    text = "You are an adult and you can vote :)";
}
else{
    text = 'You are still a teenager and you need to wait for ' + (18 - age) + ' years to vote :(';
}

alert(text);

