interface Database<T> {
  get(id: string): T;
  set(id: string, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase<T> implements Database<T> {
  protected db: Record<string, T> = {};
  get(id: string): T {
    return this.db[id];
  }
  set(id: string, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T> extends InMemoryDatabase<T> implements Persistable {
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

const myPresistentDB = new PersistentMemoryDB<number>();
myDB.set("foo", 22);
console.log(myDB.get("foo"));
const saved = myPresistentDB.saveToString();
myDB.set("foo", 23);
console.log(myDB.get("foo"));

const myDB2 = new PersistentMemoryDB<number>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"));
