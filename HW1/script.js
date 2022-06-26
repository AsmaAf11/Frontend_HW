//1

let rectangle_length=5
let rectangle_width=2

rectangle_area=(rectangle_length*rectangle_width);

console.log(`The area of the rectangle is: ${rectangle_area}`)

//2

let celsius=33;
let cToFahrenheit=(celsius*1.8)+32;
let fehrenheitToCeles =((cToFahrenheit-32)/1.8)


console.log(`${celsius}°C to fehrenheit is: ${cToFahrenheit}°F`)
console.log(`${cToFahrenheit} °F to celsius is: ${fehrenheitToCeles}°C`)

//3
let Numbers = [23,54,32,87,47]
let sum = 0;

for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];
}
console.log(sum);

//4


nums=[16,4,2,0,19,6]

let max_of_array = Math.max.apply(Math, nums);
console.log(max_of_array)

//5


let array=[1,2,3,4,5,6,7,8,9,10]
console.log(array.reverse())

//6

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);