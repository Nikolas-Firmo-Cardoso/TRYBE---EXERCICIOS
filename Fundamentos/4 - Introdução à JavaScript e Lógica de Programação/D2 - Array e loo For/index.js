// Ex 1
let numbers = [5, 80, 3, 19, 70, 1, 10, 42, 26, 27];
console.log(numbers);

// Ex 2
let sum = 0;
for (let i=0; i<numbers.length; i++) {
  sum = numbers[i] + sum;
}
console.log(sum);

// Ex 3
console.log(sum / numbers.length);

// Ex 4
if ((sum / numbers.length) > 20) {
  console.log("valor maior que 20.")
}
else {
  console.log("valor menor ou igual a 20.")
}

// Ex 5
major = 0;
for (let j=0; j<numbers.length; j++) {
  if (numbers[j] > major) {
    major = numbers[j]
  }
}
console.log(major);

// Ex 6
impar = 0;
for (let j=0; j<numbers.length; j++) {
  if (numbers[j]%2 != 0) {
    impar = impar + 1;
  }
}
console.log(impar);

// Ex 7
let var1 = numbers[0];
for (let j=0; j<numbers.length; j++) {
  if (var1 > numbers[j]){
    var1 = numbers[j];
  }
}
console.log(var1);

// Ex 8
let newArray = [];
for (let j=1; j <= 25; j++) {
  var add = newArray.push(j);
}
console.log(newArray);

// Ex 9
for (let j=0; j<numbers.length; j++) {
  console.log(numbers[j]/2);
}
