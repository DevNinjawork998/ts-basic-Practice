interface Database<K, T> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<K, T> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}
const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
console.log(myDB.get("foo"));

const myPresistentDB = new PersistentMemoryDB<string, number>();
myDB.set("foo", 22);
console.log(myDB.get("foo"));
const saved = myPresistentDB.saveToString();
myDB.set("foo", 23);
console.log(myDB.get("foo"));

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"));
