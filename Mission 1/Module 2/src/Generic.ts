{
  //
  //! generic type

  const userNumber: number[] = [2, 4, 6, 8, 12];
  //! generic type
  const userNumber1: Array<number> = [2, 4, 6, 8, 12];

  const userName: string[] = ["name 1", "name 2", "name 3"];
  //! generic type
  const userName1: Array<string> = ["name 1", "name 2", "name 3"];

  const isAdmin: boolean[] = [true, false, true];
  //! generic type
  const isAdmin1: Array<boolean> = [true, false, true];

  //!   resuable generic type array
  type GenericArray<T> = Array<T>;

  const userNumber2: GenericArray<number> = [2, 4, 6, 8, 12];
  const userName2: GenericArray<string> = ["name 1", "name 2", "name 3"];
  const isAdmin3: GenericArray<boolean> = [true, false, true];

  //!   generic array of object
  const allUsers: GenericArray<{ userName: string; age: number }> = [
    {
      userName: "name 1",
      age: 120,
    },
    {
      userName: "name 2",
      age: 140,
    },
  ];

  //!   generic tuple type
  type GenericTuple<x, y> = [x, y];

  const userTuple1: GenericTuple<string, string> = ["abc", "def"];

  const userTuple2: GenericTuple<number, { name: string; dept: string }> = [
    123,
    { name: "name 1", dept: "cse" },
  ];

  //
}
