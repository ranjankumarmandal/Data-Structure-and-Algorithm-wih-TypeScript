// scenrio 1
function addUpTo(n: number): void {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
// time complexity = O(n)

// scenario 2
function addUpTo(n: number) {
  console.log((n * (n + 1)) / 2);
}
// time complexity = O(1)

addUpTo(3);
