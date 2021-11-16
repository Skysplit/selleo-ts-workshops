/**
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */
import { FnValue, PromiseValue } from "./conditional-types";

describe("#conditional-types", () => {
  describe("#FnValue", () => {
    it("should match with function return value", () => {
      const fn1 = (a: number) => a * 2;
      const fn2 = (val: string | number) => val;

      const result1: FnValue<typeof fn1> = fn1(7);
      const result2: FnValue<typeof fn2> = fn2(13);
      const result3: FnValue<typeof fn2> = fn2("test");

      const match1: number = result1;
      const match2: number = result2;
      const match3: string = result3;

      expect(match1).toEqual(14);
      expect(match2).toEqual(13);
      expect(match3).toEqual("test");
    });
  });

  describe("#PromiseValue", () => {
    it("should match with promise return value", async () => {
      const promise1 = async (a: number) => a * 2;
      const promise2 = async (val: string | number) => val;

      const result1: PromiseValue<typeof promise1> = await promise1(7);
      const result2: PromiseValue<typeof promise1> = await promise2(13);
      const result3: PromiseValue<typeof promise2> = await promise2("test");

      const match1: number = result1;
      const match2: number = result2;
      const match3: string = result3;

      expect(match1).toEqual(14);
      expect(match2).toEqual(13);
      expect(match3).toEqual("test");
    });
  });
});
