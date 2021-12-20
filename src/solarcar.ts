import Racer from "./racer";

class SolarCar implements Racer {
  team: string;
  speed: number = 0;
  constructor(team: string) {
    this.team = team;
  }

  accelerate(): void {
    this.speed++;
  }
  isFuelEmpty(): boolean {
    return false;
  }
}

export default SolarCar;
