// create your loops here.
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var number = 0;
for (var i = 0; i < 10; i++) {
  console.log(number);
  number += 2;
}

var timer = 100;
for (var i = 0; i < 100; i++) {
  console.log('Time till explosion:', timer + '!');
  timer -= 1;
}
