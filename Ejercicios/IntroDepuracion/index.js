
function fibon(num) {
 
 if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let array =[1,1]
  for (let i = 2; i < num; i++) {
   
    array.push(array[i - 1] + array[i - 2])
  }
  return array;
}

console.log(fibon(6));
