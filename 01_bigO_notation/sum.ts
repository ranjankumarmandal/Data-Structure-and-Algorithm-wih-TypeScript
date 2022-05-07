interface Param {
  a: number;
  b: number;
}

function sum({ a, b }: Param): void {
  console.log(a + b);
}

let a = 5,
  b = 2;
sum({ a, b });

// time complexity = O(1)
