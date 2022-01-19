var person = {
  firstName: 'Jason',
  lastName: 'Lee',
  hobby: 'Baseball'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's fullName is:", fullName);
person.job = 'Dentist';
console.log("The person's job is:", person.job);
person.previousJob = 'Actor';
console.log("The person's previous job was:", person.previousJob);
console.log(person);
