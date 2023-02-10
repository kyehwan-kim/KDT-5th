function triangleArea(num1, num2) {
  return (num1 * num2) / 2;
}

let circleArea = function (radius = 3) {
  return 3.14 * radius * radius;
};

function pytha(num1, num2) {
  return Math.sqrt(num1 ** 2 + num2 ** 2);
}

console.log(triangleArea(2, 5));
console.log(circleArea());
console.log(pytha(3, 4));
