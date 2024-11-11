function integerBreak(n) {
  if (n === 2) return 1;
  let product = 1;
  while (n > 4) {
    product *= 3;
    n -= 3;
  }
  product *= n;
  return product;
}
