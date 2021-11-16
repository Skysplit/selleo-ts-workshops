export function toArray(value: unknown) {}

export function getRandomElement(items: unknown) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return null;
}

export function getLength(val: unknown) {
  return val.length;
}

export class KeyValue {
  constructor(key: unknown, value: unknown) {}

  getKey() {}
  getValue() {}
  setPair(key: unknown, value: unknown) {}
  setKey(value: unknown) {}
  setValue(value: unknown) {}
  display() {}
  toObject() {}
}
