function getDivisorsCnt(n){
  for (var c = 0, i = n; i > 0; i--) {
    if (n % i == 0) c++;
  } 
 
  return c;
}




console.log(getDivisorsCnt(1)) //> 1
console.log(getDivisorsCnt(10)) //> 4
console.log(getDivisorsCnt(11)) //> 2
console.log(getDivisorsCnt(54)) //> 8
console.log(getDivisorsCnt(4)) //> 3
console.log(getDivisorsCnt(5)) //> 2
console.log(getDivisorsCnt(12)) //> 6
console.log(getDivisorsCnt(30)) //> 8