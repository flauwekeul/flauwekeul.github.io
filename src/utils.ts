export const shuffleArray = <T>(array: T[]): T[] => array.toSorted(() => Math.random() - 0.5);
