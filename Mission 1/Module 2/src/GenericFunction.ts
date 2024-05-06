{
  //
  // generic function

  const createArray1 = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray1("value 1");

  //! with generic
  const createArray2 = <T>(param: T): T[] => {
    return [param];
  };

  const res2 = createArray2("value 1");
  const res3 = createArray2<number>(4);
  const res4 = createArray2<string>("this is string !! ");
  const res5 = createArray2<{ name: string; id: number }>({
    name: "name 22",
    id: 12,
  });

  //! tuple function generic

  const createTuple = <P, Q>(value1: P, value2: Q): [P, Q] => {
    return [value1, value2];
  };

  const res6 = createTuple<string, number>("name", 12);

  //
}
