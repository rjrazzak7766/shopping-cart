function getTextElementValueById(elementId){
    const phoneTotalElemant = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElemant.innerText;
    const currentPhoneTOtal = parseInt(currentPhoneTotalString);
    return currentPhoneTOtal ;
}

function selectTextElemantValueById(elementId, value){
    const currentSubTotalElemant = document.getElementById(elementId);
    currentSubTotalElemant.innerText = value;
}
function calculateSubTotal(){
    const currentPhoneTOtal = getTextElementValueById('phonePrice');
    const currentCaseTotal = getTextElementValueById('case-Balance');
    const currentSubTotal =  currentPhoneTOtal + currentCaseTotal; 
    selectTextElemantValueById('subTotal', currentSubTotal )

    const taxAmountstring =  (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountstring);

    selectTextElemantValueById('tax-amount', taxAmount);

    const finalAmount =  currentSubTotal + taxAmount;
    selectTextElemantValueById('final-total', finalAmount);

}