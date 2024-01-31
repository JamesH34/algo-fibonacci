function fibonacci(num) {
  let fibNumbers = [0, 1]; // Initialize the first two Fibonacci numbers
    for (let i = 2; i <= num; i++) {
        fibNumbers.push(fibNumbers[i - 2] + fibNumbers[i - 1]); // Compute the next Fibonacci number
    }
    return fibNumbers[num];
}


module.exports = fibonacci;
