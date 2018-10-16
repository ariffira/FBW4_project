class Student {
  constructor(firstName, age, lastName) {
    console.log("A new student object created");
    (this.firstName = name), (this.age = age), (this.lastName);
  }
  detail() {
    console.log("My Name is :" + this.name);
    return "lol";
  }
}

/*create a new method called fullname
params: firstName, lastName
return: fullname */

let niki = new Student("NIKI", 23)
let zoya = new Student("ZOYA");

fullname() {
  return this.fullName = this.firstName + ' ' + this.lastName;
  
  }

  function Person(firstname, lastname, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
