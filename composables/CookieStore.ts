import cookie from "js-cookie";

export default class CookieStore implements Storage {
  constructor() {
    this.length = 0;
    this._store = new Map();
  }

  [name: string]: any;
  /**
   * Returns the number of key/value pairs.
   */
  readonly length: number;
  _store: Map<String, String>;
  _cookieOpts = {};

  clear(): void {
    throw new Error("Method not implemented.");
  }
  getItem(key: string): string | null {
    return cookie.get(key);
  }
  key(index: number): string | null {
    throw new Error("Method not implemented.");
  }
  removeItem(key: string): void {
    cookie.remove(key);
  }
  setItem(key: string, value: string): void {
    // this._store.set(key, value);
    cookie.set(key, value, this._cookieOpts);
  }
}
