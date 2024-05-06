{
  type Student = {
    name?: String;
    id?: number;
    dept?: string;
    home?: string;
  };

  const student1: Student = {
    name: "name 1 ",
    id: 221,
    dept: "cse",
    home: "gazipur",
  };

  const student2: Student = {
    name: "name 2",
    id: 222,
    dept: "cse",
  };

  //   function alias type
  type Addsum = (num1: number, num2: number) => number;

  const addSum: Addsum = (num1, num2) => num1 + num2;

  //
}
