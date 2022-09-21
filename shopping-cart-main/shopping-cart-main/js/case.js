function caseUpdate(isIncrease){
    const caseInputFild = document.getElementById('case-input');
    const caseInputFildString = caseInputFild.value;
    const PreviouscaseInput =  parseInt(caseInputFildString);
    let newCaseNumber; 

    if (isIncrease === true){
        newCaseNumber =  PreviouscaseInput + 1;
    }
    else{
        newCaseNumber = PreviouscaseInput - 1;
    }

    caseInputFild.value =  newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElemant =  document.getElementById('case-Balance');
    caseTotalElemant.innerText = caseTotalPrice;
}

document.getElementById('case-plusButton').addEventListener('click', function(){
   const newCaseNumber =  caseUpdate(true);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();
   
});

document.getElementById('case-minusBtn').addEventListener('click', function(){
    const newCaseNumber =  caseUpdate(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});