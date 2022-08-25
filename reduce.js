const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let item of numbers) {
//     sum += item // sum = sum + item
// }

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15


const sum = numbers.reduce((previous, current) => {
    return previous + current;
}, 0)


console.log(sum)


