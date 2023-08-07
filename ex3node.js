const prompt = require("prompt-sync")({sigint : true});
var cal = require("./ex3.js");


console.log('1. Add\n2. Sub\n3. Mul\n4. Div');
var a = Number(prompt("Enter a :"));
var b = Number(prompt('Enter b :'));
var op = prompt('Enter Operation :');
switch(op){
    case "1":
        console.log('adding:'+cal.add(a, b));break;
    case "2":
        cconsole.log('substract:'+cal.sub(a, b));break;
    case "3":
        console.log('multiply:'+cal.mul(a, b));break;
    case "4":
        console.log('divide:'+cal.div(a, b));break;
}

//command to run: node ex3node.js

