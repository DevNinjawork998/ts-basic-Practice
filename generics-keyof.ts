function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dog = [
  { name: "Mini", age: 12 },
  { name: "LG", age: 13 },
];

console.log(pluck(dog, "age"));
console.log(pluck(dog, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvemt<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvemt("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 10,
});

sendEvemt("checkout", { time: 20, user: "bob" });
