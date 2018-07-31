class A {
  constructor(data){
    this.name   = data.name;
    this.age    = data.age;
    this.height = data.height;
  }
}
class B extends A {
  constructor(data){
    super(data);
    this.gender = data.gender;
  }
}

let Drew = new B({name: 'Drew', age: 20, height: 6.6, gender: 'Male'});
console.log(Drew);
