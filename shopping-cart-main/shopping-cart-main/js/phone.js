function phoneNumberUpdate(isIncrease){
    const phoneNumberInput = document.getElementById('phone-number-input');
    const phoneNumberString = phoneNumberInput.value;
    const phoneNumbers =  parseInt(phoneNumberString);

    let newphonesNumber;
    if(isIncrease){
        newphonesNumber = phoneNumbers + 1;
    }
    else{
        newphonesNumber = phoneNumbers - 1 ;
    }
    phoneNumberInput.value = newphonesNumber;
    return newphonesNumber;
}

function updatePricePhone(newUpdatePhoneNumber){
    const updatePhoneprice = newUpdatePhoneNumber * 1219;
    const phoneTotalBalance = document.getElementById('phonePrice')
    phoneTotalBalance.innerText = updatePhoneprice;
}


document.getElementById('phone-plus-button').addEventListener('click', function(){
    const newUpdatePhoneNumber =  phoneNumberUpdate(true);
    updatePricePhone(newUpdatePhoneNumber);
    calculateSubTotal();
    
    //calculate Total
    
});

document.getElementById('phone-mainus-button').addEventListener('click', function(){
    const newUpdatePhoneNumber = phoneNumberUpdate(false);
    updatePricePhone(newUpdatePhoneNumber);
    calculateSubTotal();
})