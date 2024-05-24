const main = (firstArray, secondArray) => {
  if(!Array.isArray(firstArray) || !Array.isArray(secondArray))
    return null;

  const conjunto = new Set([...firstArray, ...secondArray]);
  return Array.from(conjunto);
}

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [4, 5, 6, 7, 8];

console.log(main(firstArray, secondArray));