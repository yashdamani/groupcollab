//inheritance with function class parameters
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
}	//defining function class Teacher

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor; //Person
Teacher.prototype.constructor = Teacher;


var person1 = new Person("ths","woot", 5, "NA", "botcamp");
var teacher1 = new Teacher("ths2","woot2", 5, "NA", "botcamp", "CS101");
// console.log(person1);
// console.log(teacher1);

// teacher1.greeting();
console.log(Person.prototype); //returns Person
(Person.prototype.constructor); //returns Person