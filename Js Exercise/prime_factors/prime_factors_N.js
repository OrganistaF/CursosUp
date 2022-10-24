/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/
let n = document.getElementById("num").value


function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function getPrimeFactors(n) {
    "use strict";
    let sequence = [];
    //TODO: Check which numbers are factors of n and also check if
    // that number also happens to be a prime
    for (let i = 2; i <= num; i++){
        while (isPrime(i) && num % i === 0) {
            if (!sequence.includes(i)){
                sequence.push(i);
                num /= i;
            } 
        }
    }
    document.getElementById("factors").innerHTML = ("Factors --> [" + sequence.toString() + "]");
    
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
//console.log(getPrimeFactors(30030));