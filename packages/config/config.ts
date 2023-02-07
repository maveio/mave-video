export class Config {
  private _baseUrl: string = "app.mave.io";
  private static _inst: Config;
  private constructor() {}
  public static getInstance(): Config {
    if (!Config._inst) {
      Config._inst = new Config();
    }

    return Config._inst;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }
  set baseUrl(val: string) {
    this._baseUrl = val;
  }
}
