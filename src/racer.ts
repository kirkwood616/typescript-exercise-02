interface Racer {
  team: string;
  speed: number;

  accelerate(): void;

  isFuelEmpty(): boolean;
}

export default Racer;
