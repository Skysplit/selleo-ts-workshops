export function repeat(
  str: string,
  options: { times: number; join: false }
): string[];
export function repeat(
  str: string,
  options: { times: number; join: string }
): string;
export function repeat(
  str: string,
  options: { times: number; join: false | string }
) {
  const arr = Array.from({ length: options.times }).map(() => str);

  if (options.join === false) {
    return arr;
  }

  return arr.join(options.join);
}

type Options = {
  time: number;
  callback: (err: string | null, result: number) => void;
};

export function timeout(options: Options): void {
  setTimeout(() => options.callback(null, options.time), options.time);
}
