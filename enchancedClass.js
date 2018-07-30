class School {
    constructor(Schoolname, Place){
        this.Schoolname = Schoolname;
        this.Place      = Place;
    }
}
class Student extends School {
  constructor(Schoolname, Place, name, age){
  super(Schoolname, Place);
   this.name = name;
   this.age = age;
  }
}

let student  = new Student('Krishna School','Ongole','Mahesh', 21);
 
