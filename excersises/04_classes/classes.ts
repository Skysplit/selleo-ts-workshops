export class Vehicle {
  constructor(
    readonly brand: string,
    readonly model: string,
    public speed: number
  ) {}

  async accelerate(value: number) {
    this.speed += value;
    return this.speed;
  }

  async decelerate(value: number) {
    this.speed -= value;
    return this.speed;
  }
}

export class ManTruck extends Vehicle {
  load = 0;

  constructor(readonly model: string, readonly speed: number) {
    super("Man", model, speed);
  }

  async loadOnto(payload: number) {
    this.load = payload;
    return this.load;
  }
}

export class FileDocument {
  private pages: string[] = [];

  constructor(readonly title: string, ...pages: string[]) {
    this.pages = pages;
  }

  addPage(content: string) {
    this.pages.push(content);
  }

  getPages() {
    return this.pages;
  }

  getPageSize() {
    return this.pages.length;
  }

  getPage(pageNumber: number) {
    return this.pages[pageNumber - 1];
  }
}
