import Racer from "./racer";
import GasCar from "../src/gascar";
import SolarCar from "./solarcar";

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
  let emptyFuelCars = racers.filter((car) => car.isFuelEmpty() === true);

  return emptyFuelCars;
}

export function findAverageSpeed(racers: Racer[]): number {
  let total: number = 0;
  racers.forEach((element) => {
    total += element.speed;
  });
  let average: number = total / racers.length;
  return total === 0 ? total : average;
}

export function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
  let fastestRacer: Racer | null;
  if (racerA.speed > racerB.speed) {
    fastestRacer = racerA;
  } else if (racerA.speed < racerB.speed) {
    fastestRacer = racerB;
  } else {
    fastestRacer = null;
  }
  return fastestRacer;
}
