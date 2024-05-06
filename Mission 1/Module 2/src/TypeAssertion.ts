{
  //

  //   type assertion

  let anything: any;

  anything = "this is a sttring";

  const res1 = (anything as string).charAt(0);

  console.log((anything as string).charAt(0));

  const returnNumber = (value: number | string) => {
    if (typeof value === "string") {
      let converted = parseFloat(value);

      return `converted number = ${converted} `;
    } else {
      return value;
    }
  };

  //   console.log(returnNumber(4));
  //   console.log(returnNumber("4"));

  const result1 = returnNumber(4) as number;
  const result2 = returnNumber("4") as string;

  console.log("resilt 1 = ", result1);
  console.log("resilt 2 = ", result2);

  type CustomError = {
    message: string;
  };

  try {
    console.log("in try !!");
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
