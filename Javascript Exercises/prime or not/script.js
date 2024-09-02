function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }
    let firstElement = arr[1];
    return isPrime(firstElement) ? `${firstElement} is a prime number.` : `${firstElement} is not a prime number.`;
}
let arr = [5, 10, 15, 20];
console.log(checkFirstElementPrime(arr)); 
