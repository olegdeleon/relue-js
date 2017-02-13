// Problem 1
// Multiples of 3 & 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiplesOf3and5() {
  var sum = 0;
  for(var i = 0; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  return sum;
}


// Problem 2
// Fibonacci sequence
// Find the sum of the even-valued terms in the sequence not exceeding 4 million

function evenFibonacci() {
  var temp;
  var evenSum = 0;
  var a = 0;
  var b = 1;

  while(b < 4000000){
    temp = a;
    a = b;
    b += temp;

    if((b & 1) === 0){
      evenSum += b;
    }
  }

  return evenSum;
}
