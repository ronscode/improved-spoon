// // // const myObject = {
// // //   name: "Zaphod",
// // //   ship: "Heart of Gold"
// // // }

// // // const Mike = {
// // //   firstName: "Mike",
// // //   lastName: "Hill",
// // //   email: "some@email.com"
// // // }

// // // class Student {
// // //   constructor(firstName, lastName, classYear) {
// // //     this.firstName = firstName;
// // //     this.lastName = lastName;
// // //     this.classYear = classYear;
// // //   }
// // //   graduate() {
// // //     let date = new Date();
// // //     console.log(this.classYear + 2);
// // //   }
// // // }

// // // let manny = new Student("Manny", "Muro", 2022); // object from Class factory
// // // const Manny = new Student("Manny", "Muro", );
// // // let chase = new Student("Chase", "Mahan", 2022);

// // // manny.graduate();
// // // console.log(manny, Manny);





// // class Circle {
// //     constructor(radius) { 
// //       this.radius = radius; 
// //     }
// //     ////////
// //     get diameter() { 
// //       return 2 * this.radius; 
// //     }
// //     set diameter(diameter) {
// //         this.radius = diameter / 2;
// //     }
// //     get area() {
// //         return Math.PI * this.radius * this.radius;
// // } }

// // let c = new Circle(2);
// // console.log(`Radius: ${c.radius}`); // 2 
// // console.log(`Diameter: ${c.diameter}`); // 4 
// // console.log(`Area: ${c.area}`); // 12.566370614359172

// // c.diameter = 1.6;
// // console.log(`Radius: ${c.radius}`); // 0.8 
// // console.log(`Diameter: ${c.diameter}`); // 1.6 
// // console.log(`Area: ${c.area}`); // 2.0106192982974678



// class Person {
//   #age;
  
//   constructor(fn, ln, age, email) {
//     this.fn = fn;
//     this.ln = ln;
//     this.#age = age;
//     this.email = email;
//   }
//   toString() {
//     return `${this.fn} ${this.ln} ${this.age} ${this.email}`;
//   }
//   currentAge() {
//     return `${this.#age}`;
//   }
// }

// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');

// console.log(person.toString())
// console.log(person.currentAge());




class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
}

const p = new Person("Anna", "anna@gmail.com");

console.log(`Person: ${p.name} (${p.email})`);

const t = new Teacher("John", "joe@yahoo.com", "JavaScript");

console.log(
    `Teacher: ${t.name} (${t.email}), teaches ${t.subject}`
);