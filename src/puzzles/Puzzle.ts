export abstract class Puzzle<R, G, S, U> {
  private seed: string;
  private gameSeed: string;
  constructor(seed: string, gameSeed: string) {
    this.seed = seed;
    this.gameSeed = gameSeed;
  };
  abstract getRules(): R;
  abstract getGame(): G;
  abstract getState(): S;
  abstract updateState(update: U): void;
}
