function squeres(x) {
  console.log(` return 전`);
  return x * x;
  console.log(`return 후`); // dead code
}
console.log(`함수 호출 전`);
console.log(squeres(3));
console.log(`함수 호출 후 `);