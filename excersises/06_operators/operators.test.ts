/**
 * https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 * https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 */

describe("#operators", () => {
  describe("#typeof", () => {
    test("should accept all actions as param", () => {
      const add = { type: "add", summand: 3 };
      const subtract = { type: "subtract", subtrahend: 2 };

      type ActionType = unknown;

      function reduce(store = 0, action: ActionType) {
        switch (action.type) {
          case "add": {
            return store + action.summand;
          }
          case "subtract": {
            return store - action.subtrahend;
          }
        }
      }

      expect(reduce(2, add)).toEqual(5);
      expect(reduce(4, subtract)).toEqual(2);
    });
  });

  describe("#keyof", () => {
    it("should match keys of object", () => {
      type User = { id: number; name: string };

      type Key = never;

      const firstKey: Key = "id";
      const secondKey: Key = "name";

      expect([firstKey, secondKey]).not.toBeNull();
    });
  });
});
