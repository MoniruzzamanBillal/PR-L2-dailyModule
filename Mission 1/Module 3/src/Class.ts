class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  displayInfo() {
    console.log(
      `name of animal = ${this.name} and it make sound = ${this.sound} , species = ${this.species}  `
    );
  }
}

const cat = new Animal("bilai", "deshi", "meaw");

cat.displayInfo();
