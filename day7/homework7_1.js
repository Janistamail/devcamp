let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.filter((n) => n % 2 === 0).map((n) => n * 1000);
console.log(result);