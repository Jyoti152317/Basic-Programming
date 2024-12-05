function isPrime(num) {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (num != 1 && count == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPrime(5));