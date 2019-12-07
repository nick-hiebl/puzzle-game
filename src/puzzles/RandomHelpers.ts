type Rand = () => number;

export const choose = <T>(rand: Rand, list: T[]) => {
  return list[Math.floor(rand() * list.length)];
}

/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export const shuffle = <T>(a: T[], rand: Rand) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

/*
 * Assumes all items in list are unique
 * Assumes (n < list.length)
 */
export const pickUnique = <T>(rand: Rand, list: T[], n: number) => {
  let num = 0;
  const result = list.filter((_, index) => {
    const chosen = (rand() < (n - num) / (list.length - index));
    if (chosen) num++;
    return chosen;
  });
  shuffle(result, rand);
  return result;
}
