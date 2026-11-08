function isEnoughCapacity(products, containerSize) {
  const productValues = Object.values(products);
  let totalProducts = 0;

  for (const value of productValues) {
    totalProducts += value;
  }

  return totalProducts <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, bread: 2 }, 4)
); // false
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, bread: 2 }, 7)
); // true
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, bread: 2 }, 6)
); // false
console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, bread: 3 }, 13)
); // true
