export const add = (a, b) => {
  return a + b;
};

export const getStr = (n) => {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
  const arr = Array.from({length: n}, (v, i) => {
    let num = i + 1;
    let str = '';
    // if(num % 3 === 0 && num % 7 === 0  && num % 5 === 0) return "fizzbuzzdizz";
    // if(num % 3 === 0 && num % 7 === 0) return "fizzdizz";
    // if(num % 5 === 0 && num % 7 === 0) return "buzzdizz";
    // if(num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
    if(num % 3 === 0) {
        str+="fizz";
    }
    if(num % 5 === 0){
        str+="buzz";
    }
    if(num % 7 === 0){
        str+="dizz";
    }
    return str ? str : num
  })
  return arr.join(" ");
};
