// excercise1
const Cost = (price) => {
    const fee= 3;
    const interestfee=0.01;
    let transactionpayments = (price+fee)+(price*interestfee);
    return transactionpayments;
}
Cost(2500);

// excercise2
let friend = (name1,name2,name3) =>{
    const bya =1999;
    const byb =1997;
    const byc =1996;
    const year =2023;
    const age1= year -bya;
    const age2= year -byb;
    const age3= year -byc;
    return `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}` 
  }
  friend('a','b','c');


//challenge
const Score = Math.floor(Math.random()*12);

const whopassfail =() =>{
    if(Score >= 5){
    return true;
    } else {
    return false;
    }
}

const scoreTag =() =>{
  if(Score === 11){
    return 'well done, Perfect scores.';
  } else if(Score > 8 ){
    return "Excellent score" 
} else if(Score >=5){
    return "Pass"
} else {
    return "Fails"
}
}

console.log(scoreTag());
console.log(whopassfail());