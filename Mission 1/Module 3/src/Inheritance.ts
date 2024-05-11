{
  //! inherutance

  // ! paprent class
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHour: number) {
      console.log(
        ` this person - ${this.name} will sleep for ${numOfHour} hours !!    `
      );
    }

    // ! parent class ends
  }

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(
        ` this taecher - ${this.name} will take ${numOfClass} class!!!   `
      );
    }
  }

  //   ! teacher class ends

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    displayInfo() {
      console.log(
        `student name = ${this.name} , student age = ${this.age} , student address = ${this.address}   `
      );
    }
  }
  // ! student class ends

  const teacher = new Teacher("teacher 1", 555, "dhaka , uttara ", "professor");
  const student = new Student("student 1", 120, "gazipur ");

  console.log("");

  teacher.getSleep(6);
  teacher.takeClass(5);

  console.log("");

  student.getSleep(7);
  student.displayInfo();
  //   !
}
