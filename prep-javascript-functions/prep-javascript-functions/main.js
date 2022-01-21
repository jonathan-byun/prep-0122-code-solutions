function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Nice to meet you, ' + name + '!';
}

var greeting = getGreeting('Brian');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}

var multiplied = addAndMultiplyBy5(10, 5);
console.log('Added and multiplied by 5 is:', multiplied);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var divided = multiplyAndDivideBy5(35, 10);
console.log('multiplied and divided by 5 is:', divided);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtracted = subtractTwoNumbers(22, 7);
console.log('Subtracted is:', subtracted);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circumference is', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Jonathan', 'Byun');
console.log('Full name is:', fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubed = cube(5);
console.log('The number cubed is:', cubed);
