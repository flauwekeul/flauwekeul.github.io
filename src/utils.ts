export const shuffleArray = <T>(array: T[]): T[] => array.toSorted(() => Math.random() - 0.5);

const MILLISECONDS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
export const yearsSince = (date: Date) => Math.floor((new Date().getTime() - date.getTime()) / MILLISECONDS_PER_YEAR);

export const intercalate = <T, S>(array: T[], separator: S): Array<T | S> =>
  array.flatMap((item, i) => (i < array.length - 1 ? [item, separator] : [item]));
