interface Cat {
  readonly name: string;
  breed: string;
}
type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");
