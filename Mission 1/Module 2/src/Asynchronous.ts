{
  //! asynchronous

  type Something = {
    something: string;
  };

  //! promise create
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: { something: string } = {
        something: "this is my data xd :)",
      };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data !!");
      }
    });
  };

  // calling promise
  const showData = async () => {
    const data: Something = await createPromise();
    console.log(data);
  };

  showData();

  // !
}
