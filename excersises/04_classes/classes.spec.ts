/**
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility
 * https://basarat.gitbook.io/typescript/type-system/interfaces#classes-can-implement-interfaces
 */

import { FileDocument, ManTruck, Vehicle } from "./classes";

describe("#classes", () => {
  describe("#Car", () => {
    test("should behave like car", async () => {
      const vehicle = new Vehicle("toyota", "yaris", 50);

      // "brand" and "model" should not be available to write to
      expect(vehicle.brand).toEqual("toyota");
      expect(vehicle.model).toEqual("yaris");
      expect(vehicle.speed).toEqual(50);
      expect(await vehicle.accelerate(15)).toEqual(65);
      expect(vehicle.speed).toEqual(65);
      expect(await vehicle.decelerate(25)).toEqual(40);
      expect(vehicle.speed).toEqual(40);
    });
  });

  describe("#ManTruck", () => {
    test("should carry payload", async () => {
      const truck = new ManTruck("TGX", 0);

      expect(truck).toBeInstanceOf(Vehicle);
      expect(truck.brand).toEqual("Man");
      expect(truck.model).toEqual("TGX");
      expect(truck.speed).toEqual(0);
      expect(await truck.loadOnto(500)).toEqual(500);
      expect(truck.load).toEqual(500);
      expect(await truck.accelerate(30)).toEqual(30);
      expect(truck.speed).toEqual(30);
    });
  });

  describe("#Document", () => {
    test("should behave like paper", () => {
      const document = new FileDocument(
        "Very important document",
        "first page",
        "second page"
      );

      document.addPage("page content");
      document.addPage("another page");

      expect(document.title).toEqual("Very important document");
      expect(document.getPageSize()).toEqual(4);
      expect(document.getPage(4)).toEqual("another page");
      expect(document.getPages()).toEqual([
        "first page",
        "second page",
        "page content",
        "another page",
      ]);
    });

    test("should allow creating multiple initial pages", () => {
      const document = new FileDocument(
        "title",
        "first",
        "second",
        "third",
        "fourth",
        "fifth"
      );

      expect(document.getPageSize()).toEqual(5);
      expect(document.getPage(1)).toEqual("first");
      expect(document.getPage(5)).toEqual("fifth");
    });
  });
});
