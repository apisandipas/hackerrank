export default function alternatingCharacters(s: string): number {
  const stringArr = s.split('');

  return stringArr.reduce((count, char, index) => {
    if (stringArr[index - 1] === char) {
      count++;
    }
    return count;
  }, 0);
}
