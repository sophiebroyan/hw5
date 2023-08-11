//4. reduce method
const numbers = [1, 2, 3, 4];

function reduce(array, callback) {
  let a = 0;
  for (let i in array) {
    a = callback(array[i], a)
  }
  return a;
}

function sum(item, accum) {
  return accum + item;
}

const result = reduce(numbers, sum)
console.log(result);
