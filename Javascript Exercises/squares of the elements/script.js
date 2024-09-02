function sumOfSquares(arr) {
    return arr.reduce((acc, num) => acc + num * num, 0);
}
let arr = [1, 2, 3, 4];
console.log(sumOfSquares(arr)); 
