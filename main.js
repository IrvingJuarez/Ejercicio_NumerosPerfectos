let btn = document.querySelector(".send-btn");
let resultSection = document.querySelector(".main-result");
let resultSpan = document.querySelector(".result")
let limit, divisibles, divisiblesSum, perfectNums;

btn.addEventListener("click", () => {
  limit = document.querySelector("input[type=text]").value;
  if(limit <= 0){
    showResults(false);
  }else{
    perfectNums = [];
    getPerfects(limit);
  }
});

const getPerfects = (limit) => {
  if (limit > 1) {
    for (let i = 1; i < limit; i++) {
      divisibles = [];
      divisiblesSum = 0;

      if (isPerfect(i)) {
        perfectNums.push(i);
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
  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      divisibles.push(j);
    }
  }

  if (divisibles) {
    addUp(divisibles);
    if (divisiblesSum === num) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

const addUp = (arr) => {
  divisiblesSum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
};
