let btn = document.querySelector(".send-btn");
let resultSection = document.querySelector(".main-result");
let resultSpan = document.querySelector(".result")
let limit, divisibles, perfectNums;

btn.addEventListener("click", () => {
  limit = document.querySelector("input[type=text]").value;
  if(limit <= 1){
    showResults(false);
  }else{
    perfectNums = [];
    getPerfects(limit);
  }
});

const getPerfects = (limit) => {
  if (limit > 1) {
    divisibles = [];

    if(limit > 6){
      for (let i = 6; i < limit; i++) {
        if (isPerfect(i)) {
          perfectNums.push(i);
        }
      }
    }

    showResults(true);
  }
};

const showResults = (flag) => {
    let msg;
    if(flag){
        if(perfectNums.length >= 1){
            msg = `The perfect numbers lower than ${limit} are:`
            for(let val of perfectNums){
                msg += ` ${val},`;
            }
        }else{
            msg = `There is any perfect number lower than ${limit}`;
        }
    }else{
        msg = "No valid value was given";
    }

    resultSection.classList.remove("hidden")
    resultSpan.textContent = msg;
}

const isPerfect = (num) => {
  for (let j = 2; j <= num/2; j++) {
    if (num % j === 0) {
      divisibles.push(j);
    }
  }

  return addUp(divisibles);
};

const addUp = (arr) => {
  if(!arr){
    return false;
  }

  if( arr.reduce( (a,b) => {return a+b}, 1 ) ){
    return true
  }else{
    return false
  }
};
