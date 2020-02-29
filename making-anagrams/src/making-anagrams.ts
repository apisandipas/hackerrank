export default function makeAnagram(a: string, b: string): number {
  const getCounts = (str: string) => {
    return str.split('').reduce((acc, letter, index) => {
      if (acc[letter]) {
        acc[letter]++;
      } else {
        acc[letter] = 1;
      }
      return acc;
    }, {});
  };

  const aCounts = getCounts(a);
  const bCounts = getCounts(b);
  let deletions = 0;

  Object.keys(aCounts).forEach(aKey => {
    if (bCounts[aKey]) {
      // Account for the keys the have in common and record the differences.
      if (bCounts[aKey] > aCounts[aKey]) {
        deletions += bCounts[aKey] - aCounts[aKey];
      } else if (bCounts[aKey] < aCounts[aKey]) {
        deletions += aCounts[aKey] - bCounts[aKey];
      }
    } else {
      // Account for the letter not existing on this word
      deletions += aCounts[aKey];
    }
  });

  Object.keys(bCounts).forEach(bKey => {
    if (!aCounts[bKey]) {
      // Account for the letter not existing on this word
      deletions += bCounts[bKey];
    }
  });

  return deletions;
}
