

function factorial(num) {
  let fact = num;
  for (let i = num - 1; i > 0; i--) {
    fact = fact * i;
    
    }
    return fact;
}
console.log(factorial(10));