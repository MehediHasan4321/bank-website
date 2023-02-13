const currentBalnce = document.getElementById("currnet-blance");
let totalBalance = 1240;
let depositeTotal =0;
let witdrowTotal = 0;
document.getElementById("deposite-btn").addEventListener("click", function () {
  
    const depositeValue = inputFieldValueToNumber("deposite-input-field");
    const depositeBalance = document.getElementById("deposite-blance");
    depositeTotal += depositeValue;
    depositeBalance.innerText = `$${depositeTotal}`
    totalBalance += depositeTotal
    currentBalnce.innerText = `$${totalBalance}`
    
})
document.getElementById("witdrow-btn").addEventListener("click", function () {
    const widtdrowValue = inputFieldValueToNumber("witdrow-input-field")
    const witdrowBlance = document.getElementById("widtdrow-blance")
    witdrowTotal  += widtdrowValue;
    witdrowBlance.innerText = `$${witdrowTotal}`
    totalBalance -= witdrowTotal ;

    currentBalnce.innerText = `$${totalBalance}`

    

})

function inputFieldValueToNumber(inputId){
    let inputFieldValue = document.getElementById(inputId).value;

    const strToNum = parseFloat(inputFieldValue);
    document.getElementById(inputId).value = ""   
    
    return strToNum;
}



