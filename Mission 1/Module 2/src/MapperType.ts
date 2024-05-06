{
  // ! mapped type

  type AreaNumber = {
    height: number;
    width: number;
    radius: number;
  };

  //   type AreaString  = {
  //     height: string;
  //     width: string;
  //   }

  // type AreaString = {
  //     [ key in "height" | 'width' ] : string
  //  }

  //! using type maped
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type AreaString1<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString1<{ height: string; width: number }> = {
    height: "123",
    width: 123,
  };

  // !
}
