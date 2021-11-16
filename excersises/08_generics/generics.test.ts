/**
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 * https://basarat.gitbook.io/typescript/type-system/generics
 */
import { getLength, getRandomElement, KeyValue, toArray } from "./genercis";

describe("#generics", () => {
  describe("#toArray", () => {
    it("should wrap primitive types in array", () => {
      const strTest: string[] = toArray("foo");
      const numTest: number[] = toArray(123);
      const boolTest: boolean[] = toArray(false);

      expect(strTest).toEqual(["foo"]);
      expect(numTest).toEqual([123]);
      expect(boolTest).toEqual([false]);
    });

    it("should preserve the same value if already an array", () => {
      const strTest: string[] = toArray(["foo"]);
      const numTest: number[] = toArray([123]);
      const boolTest: boolean[] = toArray([false]);

      expect(strTest).toEqual(["foo"]);
      expect(numTest).toEqual([123]);
      expect(boolTest).toEqual([false]);
    });
  });

  describe("#getRandomElement", () => {
    it("should return random element from an array", () => {
      const result1 = getRandomElement([1, 2, 3]);
      const result2 = getRandomElement(["foo", "bar", "baz"]);

      const match1: number = result1;
      const match2: string = result2;

      expect(match1).toEqual(expect.any(Number));
      expect(match2).toEqual(expect.any(String));
    });
  });

  describe("#getLength", () => {
    it("should return element length property", () => {
      expect(getLength("test")).toEqual(4);
      expect(getLength([1, 2, 3, 4, 5])).toEqual(5);
      expect(getLength((_foo: any, _bar: any) => {})).toEqual(2);
      expect(getLength({ length: 13 })).toEqual(13);
    });
  });

  describe("#KeyValue", () => {
    it("should store key and value", () => {
      const keyValue = new KeyValue("foo", 1337);

      expect(keyValue.toObject()).toEqual({ foo: 1337 });
      expect(keyValue.display()).toEqual("foo: 1337");
    });

    it("should modify stored values", () => {
      const keyValue = new KeyValue("bar", 33);

      expect(keyValue.setPair("baz", 3)).toEqual(["baz", 3]);
      expect(keyValue.getKey()).toEqual("baz");
      expect(keyValue.getValue()).toEqual(3);

      expect(keyValue.setValue(7)).toEqual(7);
      expect(keyValue.getValue()).toEqual(7);

      expect(keyValue.setKey("test")).toEqual("test");
      expect(keyValue.getKey()).toEqual("test");

      expect(keyValue.toObject()).toEqual({ test: 7 });
      expect(keyValue.display()).toEqual("test: 7");
    });
  });
});
