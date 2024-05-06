{
  // ! utility type

  //! pick type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;

  //!   omit type
  type ContactInfo = Omit<Person, "name" | "age">;

  //   ! required type
  type RequiredAll = Required<Person>;

  //   ! partial type
  type PartialType = Partial<Person>;

  //   ! read only  type
  type Onlyread = Readonly<Person>;

  //   ! ** record type
  type MyObj = Record<string, string>;

  const myObj1: MyObj = {
    name: "name 1",
    email: "abc@d.com",
  };

  //   ! empty object
  const EmptyObj: Record<string, unknown> = {};

  // !
}
