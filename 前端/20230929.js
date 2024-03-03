const add = new Proxy(
  { _store: 0 },
  {
    get(target, key, receiver) {
      if (key === Symbol.toPrimitive) {
        return () => {
          return target._store;
        };
      }
      target._store += +key;
      return receiver;
    },
  }
);

console.log(add[2][3][10] + 100);
