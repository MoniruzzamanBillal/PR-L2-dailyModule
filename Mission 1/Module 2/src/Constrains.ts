{
  //
  //! typescript constrains
  const addCouurseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    param: T
  ) => {
    const course: string = "web dev 2";

    return {
      ...param,
      course,
    };
  };

  const student1 = addCouurseToStudent({
    id: 221,
    name: "st1",
    email: "abc@d.com",
    devType: "web dev",
  });

  const student2 = addCouurseToStudent({
    id: 222,
    name: "st2",
    email: "123@4.com",
    watch: "no watch!! ",
  });

  const student3 = addCouurseToStudent({
    // id: 223,
    // name: "test student",
    // email: "st3@gmail.com",
    test: "testing !! ",
  });

  //!   generic constrain with keyof operator
  type Vehical = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehical;

  const person1: Owner = "car";
  const person2: Owner2 = "bike";

  const user = {
    id: 221,
    name: "anme 1",
    age: 122,
  };

  const car = {
    name: "toyota",
    year: 2022,
  };

  const getPropertyValue = <P, Q extends keyof P>(value1: P, value2: Q) => {
    return value1[value2];
  };

  const res1 = getPropertyValue(user, "age");
  const res2 = getPropertyValue(car, "year");

  //!
}
