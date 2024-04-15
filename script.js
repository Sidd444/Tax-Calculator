let close = document.getElementById("close");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let gross = document.getElementById("input1"),
  extra = document.getElementById("input2"),
  age = document.getElementById("input3"),
  deductions = document.getElementById("input4");
let cal=document.getElementById("calculations");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (gross.value !== "" && extra.value !== "" && age.value !== "" && deductions.value !== ""){
    let grossValue=gross.value,extraValue=extra.value,ageValue=age.value,deductionsValue=deductions.value;

    let overallIncome=grossValue+extraValue-deductionsValue;
    let tax=0;
    if(overallIncome>800000){
      let taxableAmount=overallIncome/100000-8;
      if(ageValue==="<40") tax=0.3*taxableAmount;
      else if(ageValue===">=40 & <60") tax=0.4*taxableAmount;
      else if(ageValue===">=60") tax=0.1*taxableAmount;
    }
    cal.innerText=overallIncome-tax;
    result.style.display = "block";
  }
});

close.addEventListener("click", () => {
  result.style.display = "none";
});
