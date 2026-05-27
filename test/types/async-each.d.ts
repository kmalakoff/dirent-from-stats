declare module 'async-each' {
  function each<T, R>(items: T[], next: (item: T, callback: (err?: Error | null, result?: R) => void) => void, callback: (err?: Error | null, results?: R[]) => void): void;
  export = each;
}
