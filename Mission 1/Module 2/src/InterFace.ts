{
  //
  // type
  type User1 = {
    userName: string;
    age: number;
  };

  //   intterface
  interface User2 {
    userName: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  //!   extends ffrom another interfface
  //   interface UserWithRole2 extends User2 {
  //     role: string;
  //   }

  //! extends from another type
  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: UserWithRole2 = {
    userName: "monir",
    age: 12,
    role: "learner",
  };

  //*   array with interfface

  //! using type
  type Roll1 = number[];

  //! using interface
  interface Roll2 {
    [index: number]: number;
  }

  const userRoll1: Roll1 = [1, 3, 5, 7, 9];
  const userRoll2: Roll2 = [1, 3, 5, 7, 9];

  //*   fuunction with interfface

  //! using type
  type Add1 = (num1: number, num2: number) => number;

  //! using interface

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const handlleAddNummber1: Add1 = (num1, num2) => num1 + num2;
  const handlleAddNummber2: Add2 = (num1, num2) => num1 + num2;

  //
  //
}
