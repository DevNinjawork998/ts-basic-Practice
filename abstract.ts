abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attacks with ${this.getSpecialMove()}`);
  }

  abstract getSpecialMove(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialMove(): string {
    return "Hadoken";
  }
  get name(): string {
    return "Ryu";
  }
}

class ChunLi extends StreetFighter {
  getSpecialMove(): string {
    return "Lightning Kick";
  }
  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
ryu.fight();

const chunLi = new ChunLi();
chunLi.fight();
