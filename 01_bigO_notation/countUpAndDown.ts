function countUpAndDown(n: number): void {
  console.log('Going Up!');
  for (let i = 0; i <= n; i++) console.log(i);

  console.log('Goind Down!');
  for (let j = n; j >= 0; j--) console.log(j);
}
// time complexity = O(n)
