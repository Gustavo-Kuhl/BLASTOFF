const A = [1, 2, 3, 4]
const B = [1, 2, 5, 8]

const intersection = A.filter((i) => B.includes(i));

console.log(intersection)