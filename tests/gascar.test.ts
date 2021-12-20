import GasCar from "../src/gascar";

describe("GasCar", () => {
  test("Team & Fuel properties are set from constructor parameters", () => {
    let teamName: GasCar = new GasCar("Slack Jaws", 15);
    expect(teamName).toEqual({ speed: 0, team: "Slack Jaws", fuel: 15 });
  });

  test("fuel defaults to 10, when the second constructor parameter is omitted.", () => {
    let teamName: GasCar = new GasCar("Slack Jaws");
    expect(teamName.fuel).toBe(10);
  });

  test("The speed property starts at 0", () => {
    let teamName: GasCar = new GasCar("Slack Jaws");
    expect(teamName.speed).toBe(0);
  });

  test("Calling accelerate once brings speed to 2", () => {
    let teamName: GasCar = new GasCar("Slack Jaws");
    teamName.accelerate();
    expect(teamName.speed).toBe(2);
  });

  test("Calling accelerate twice brings speed to 4", () => {
    let teamName: GasCar = new GasCar("Slack Jaws");
    teamName.accelerate();
    teamName.accelerate();
    expect(teamName.speed).toBe(4);
  });

  test("Calling accelerate once reduces fuel by 1", () => {
    let teamName: GasCar = new GasCar("Slack Jaws");
    teamName.accelerate();
    expect(teamName.fuel).toBe(9);
  });

  test("isFuelEmpty returns true when fuel is 0 .", () => {
    let teamName: GasCar = new GasCar("Slack Jaws", 0);
    expect(teamName.isFuelEmpty()).toBe(true);
  });

  test("isFuelEmpty returns false when fuel is greater than 0", () => {
    let teamName: GasCar = new GasCar("Slack Jaws", 15);
    expect(teamName.isFuelEmpty()).toBe(false);
  });
});
