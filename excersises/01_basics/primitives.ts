export function join(arr: string[]) {
  return arr.join(" - ");
}

export function multiplyAll(num: number, arrOfNum: number[]) {
  return arrOfNum.map((val) => num * val);
}

export function sayHello(name: string, capitalize = false) {
  const retName = capitalize ? name.toUpperCase() : name;

  return `Hello, ${retName}!`;
}
