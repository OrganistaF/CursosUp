/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

function getPrimeFactors() {
    "use strict";

    let n = document.getElementById("num").value;

    function isPrime(n) {
        var i;
        let factors = [1]
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                factors.push(i)
                n = n/i
            } else{

            }
        }
        document.getElementById("factors").innerHTML = ("Factors: " + factors.toString());




    //TODO: Check which numbers are factors of n and also check if
    // that number also happens to be a prime

   // return sequence;
    };
}
// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
//console.log(getPrimeFactors(30030));>
/*
function checkPrime() {
    var id = document.getElementById("num");
    var number = parseInt (document.getElementById("num").value);
    var maxNum = parseInt(1299827);
    if(number < maxNum && !isNaN(number)) {
        for(var i = number+1; i< maxNum; i++) {
            //TODO: check if the current number is a prime or not
            // If it is, then return it
            if (isPrime(i)){
                document.getElementById("num").value = i;
                break;
            }
        }
    } else {
        window.alert("Please Enter Number Below 1299827 or Enter A Valid Integer");
        id.value = "";
    }
}

*/