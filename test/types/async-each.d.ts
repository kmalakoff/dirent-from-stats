declare module 'async-each' {
  function each<T, R>(items: T[], next: (item: T, callback: (err?: Error, result?: R) => void) => void, callback: (err?: Error, results?: R[]) => void): void;
  export = each;
}
