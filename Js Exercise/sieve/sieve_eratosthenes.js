/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

 function sieve() {
    "use strict";

    var array = [], primes = [];
    let n = 100;
    let it = Math.sqrt(n) + 1;

    for(let a = 0; a < n; a++){
        array.push(a);
    }

    for(let i = 0; i < it; i++){
        if(i < 2){
            array[i] = -1;
        }
        if(i > 1){
            for(let j = i+1; j < n; j+i){
                array[j] = -1;
            }

        }
    }

    for(let b = 0; b < n; b++){
        if(array[b] === -1){
            primes.push[b];
        }
            
    }

    
    document.getElementById("sieve").innerHTML = primes;
    return primes;
};

//console.log(sieve(1000000));