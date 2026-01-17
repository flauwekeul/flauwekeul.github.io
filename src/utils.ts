export const shuffleArray = <T>(array: T[]): T[] => array.toSorted(() => Math.random() - 0.5);

const MILLISECONDS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
export const yearsSince = (date: Date) => Math.floor((new Date().getTime() - date.getTime()) / MILLISECONDS_PER_YEAR);
