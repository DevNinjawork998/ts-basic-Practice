function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((_, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}
myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
}

console.log(
  myFilter([1, 2, 3, 4, , 5, 6, 7, 8, 9], (v) => (v as number) % 2 === 0)
);
