function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

}; //defining function class Person

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};	// added new property to the existing class Person


function Teacher(first, last, age, gender, interests, subject) {

  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}	////defining function class Teacher


var teacher1= new Teacher("ths","hacking school",5,"NA","Bootcamp","MERN");
var student1= new Person("ths","hacking school",5,"NA","Bootcamp");


console.log(teacher1.subject);
console.log(student1.interests);
console.log(student1.greeting())