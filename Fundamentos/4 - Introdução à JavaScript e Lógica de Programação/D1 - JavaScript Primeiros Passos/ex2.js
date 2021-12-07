const num1 = 2;
const num2 = 10;
const num3 = 17;

//ex1
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

//ex2
if (num1 > num2) {
    console.log("O primeio valor é maior.")
}
else if (num1 == num2) {
    console.log("Ambos são iguais")
}
else {
    console.log("O segundo valor é maior")
}

//ex3
if (num1 > num2 && num1 >3) {
    console.log("O primveiro valor é o maior dos três.")
}
else if (num2 > num1 && num2 > num3) {
    console.log("O segundo valor é o maior dos três.")
}
else if (num3 > num1 && num3 > num2) {
    console.log("O terceiro valor é o maior dos três.")
}
else {
    console.log("Existem valores equivalentes, não é possivel determinar o maior.")
}

//ex4
if (num1 > 0) {
    console.log("positive")
}
else if (num1 < 0) {
    console.log("negative")
}
else {
    console.log("zero")
}

//ex5
if (num1 && num2 && num3 == Number) {
    console.log((num1 + num2 + num3) == 180)
}
else if (num1 && num2 && num3 != Number) {
    console.log("Algum elemento não é considerado número.")
}
