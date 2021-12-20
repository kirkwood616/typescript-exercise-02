import SolarCar from "../src/solarcar";

describe("SolarCar", () => {
  test("Set team property from constructor parameters", () => {
    let teamName: SolarCar = new SolarCar("Slack Jaws");
    expect(teamName.team).toBe("Slack Jaws");
  });

  test("Speed property set at 0", () => {
    let teamName: SolarCar = new SolarCar("Slack Jaws");
    expect(teamName.speed).toBe(0);
  });

  test("Calling accelerate once brings speed to 1", () => {
    let teamName: SolarCar = new SolarCar("Slack Jaws");
    teamName.accelerate();
    expect(teamName.speed).toBe(1);
  });

  test("Calling accelerate twice brings speed to 2", () => {
    let teamName: SolarCar = new SolarCar("Slack Jaws");
    teamName.accelerate();
    teamName.accelerate();
    expect(teamName.speed).toBe(2);
  });

  test("Calling isFuelEmpty returns false", () => {
    let teamName: SolarCar = new SolarCar("Slack Jaws");
    teamName.isFuelEmpty();
    expect(teamName.isFuelEmpty()).toBe(false);
  });
});
