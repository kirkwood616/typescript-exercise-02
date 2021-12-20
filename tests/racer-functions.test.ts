import Racer from "../src/racer";
import GasCar from "../src/gascar";
import SolarCar from "../src/solarcar";
import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from "../src/racer-functions";

describe("Racer tests to return array of items matching cases", () => {
  test("Use findRacersWithEmptyFuel & return array of GasCar w/ empty fuel", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 0);
    let localYokels: Racer = new GasCar("Local Yokels");
    let earnhardtAlphas: Racer = new GasCar("Earnhardt Alphas", 20);
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([
      { speed: 0, team: "Slack Jaws", fuel: 0 },
    ]);
  });

  test("Use findRacersWithEmptyFuel & return array of GasCar w/ empty fuel with all @ 0 fuel", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 0);
    let localYokels: Racer = new GasCar("Local Yokels", 0);
    let earnhardtAlphas: Racer = new GasCar("Earnhardt Alphas", 0);
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([
      { speed: 0, team: "Slack Jaws", fuel: 0 },
      { speed: 0, team: "Local Yokels", fuel: 0 },
      { speed: 0, team: "Earnhardt Alphas", fuel: 0 },
    ]);
  });

  test("Use findRacersWithEmptyFuel & return array of GasCar w/ empty fuel with all @ positive fuel", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws");
    let localYokels: Racer = new GasCar("Local Yokels", 20);
    let earnhardtAlphas: Racer = new GasCar("Earnhardt Alphas", 30);
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([]);
  });

  test("Use findRacersWithEmptyFuel & return array of SolarCar w/ empty fuel", () => {
    let slackJaws: Racer = new SolarCar("Slack Jaws");
    let localYokels: Racer = new SolarCar("Local Yokels");
    let earnhardtAlphas: Racer = new SolarCar("Earnhardt Alphas");
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([]);
  });

  test("Use findRacersWithEmptyFuel on mixed type of car & return array of Racers w/ empty fuel", () => {
    let slackJaws: Racer = new SolarCar("Slack Jaws");
    let localYokels: Racer = new GasCar("Local Yokels", 0);
    let earnhardtAlphas: Racer = new GasCar("Earnhardt Alphas");
    let solarSupremacy: Racer = new SolarCar("Solar Supremacy");
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas, solarSupremacy];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([
      { fuel: 0, speed: 0, team: "Local Yokels" },
    ]);
  });

  test("Use findRacersWithEmptyFuel on empty array & return an empty array", () => {
    let emptyArray: Racer[] = [];
    expect(findRacersWithEmptyFuel(emptyArray)).toEqual([]);
  });

  test("array of GasCar with different speeds & return average", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 20);
    slackJaws.accelerate();
    let localYokels: Racer = new GasCar("Local Yokels", 20);
    localYokels.accelerate();
    localYokels.accelerate();
    let earnhardtAlphas: Racer = new GasCar("Earnhardt Alphas", 20);
    earnhardtAlphas.accelerate();
    earnhardtAlphas.accelerate();
    earnhardtAlphas.accelerate();
    earnhardtAlphas.accelerate();
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas];

    expect(findAverageSpeed(gasCarArray)).toBeCloseTo(4.666);
  });

  test("array of GasCar & SolarCar with different speeds & return average", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 20);
    slackJaws.accelerate();
    let localYokels: Racer = new SolarCar("Local Yokels");
    localYokels.accelerate();
    localYokels.accelerate();
    let earnhardtAlphas: Racer = new GasCar("Earnhardt Alphas", 20);
    earnhardtAlphas.accelerate();
    earnhardtAlphas.accelerate();
    earnhardtAlphas.accelerate();
    earnhardtAlphas.accelerate();
    let solarSupremacy: Racer = new SolarCar("Solar Supremacy");
    solarSupremacy.accelerate();
    solarSupremacy.accelerate();
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas, solarSupremacy];
    expect(findAverageSpeed(gasCarArray)).toBe(3.5);
  });

  test("array of GasCar & SolarCar with different speeds & return average", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 20);
    let localYokels: Racer = new SolarCar("Local Yokels");
    let earnhardtAlphas: Racer = new GasCar("Earnhardt Alphas", 20);
    let solarSupremacy: Racer = new SolarCar("Solar Supremacy");
    let gasCarArray = [slackJaws, localYokels, earnhardtAlphas, solarSupremacy];
    expect(findAverageSpeed(gasCarArray)).toBe(0);
  });

  test("Empty array returning 0", () => {
    let emptyArray: Racer[] = [];
    expect(findAverageSpeed(emptyArray)).toBe(0);
  });

  test("racerA faster than racerB", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 20);
    slackJaws.accelerate();
    slackJaws.accelerate();
    slackJaws.accelerate();
    let localYokels: Racer = new GasCar("Local Yokels");
    localYokels.accelerate();
    localYokels.accelerate();
    expect(getFasterRacer(slackJaws, localYokels)).toEqual({
      speed: 6,
      team: "Slack Jaws",
      fuel: 17,
    });
  });

  test("racerB faster than racerA", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 20);
    slackJaws.accelerate();
    slackJaws.accelerate();
    let localYokels: Racer = new GasCar("Local Yokels");
    localYokels.accelerate();
    localYokels.accelerate();
    localYokels.accelerate();
    localYokels.accelerate();
    expect(getFasterRacer(slackJaws, localYokels)).toEqual({
      speed: 8,
      team: "Local Yokels",
      fuel: 6,
    });
  });

  test("racerA === racerB, return null", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 20);
    slackJaws.accelerate();
    slackJaws.accelerate();
    let localYokels: Racer = new GasCar("Local Yokels");
    localYokels.accelerate();
    localYokels.accelerate();
    expect(getFasterRacer(slackJaws, localYokels)).toBe(null);
  });

  test("racerB faster than racerA", () => {
    let slackJaws: Racer = new GasCar("Slack Jaws", 20);
    slackJaws.accelerate();
    let localYokels: Racer = new SolarCar("Local Yokels");
    localYokels.accelerate();
    localYokels.accelerate();
    localYokels.accelerate();
    localYokels.accelerate();
    expect(getFasterRacer(slackJaws, localYokels)).toEqual({
      speed: 4,
      team: "Local Yokels",
    });
  });
});
