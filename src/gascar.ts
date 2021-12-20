import Racer from "./racer";

class GasCar implements Racer {
  team: string;
  speed: number = 0;
  fuel: number;
  constructor(team: string, fuel?: number | undefined) {
    this.team = team;
    this.fuel = fuel ?? 10;
  }

  accelerate(): void {
    this.speed += 2;
    this.fuel -= 1;
  }

  isFuelEmpty() {
    return this.fuel <= 0 ? true : false;
  }
}

export default GasCar;
