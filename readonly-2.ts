class Doggy {
  constructor(
    public readonly name: string,
    public readonly age: number
  ) {}
}

const llg = new Doggy("LG", 13);
console.log(llg.name);

class DogList {
  private doggies: Doggy[] = [];
  public static instance: DogList = new DogList();

  private constructor() {}

  public addDog(dog: Doggy) {
    this.doggies.push(dog);
  }
  getDogs() {
    return this.doggies;
  }
}
