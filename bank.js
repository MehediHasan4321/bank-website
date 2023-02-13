
//All Event Lestener Are Here

document.getElementById("deposite-btn").addEventListener("click", function () {
  
    const depositeValue = inputFieldValueToNumber("deposite-input-field");
    const deposite = strToNumFromElement("deposite-blance")
    const current = strToNumFromElement("currnet-blance")
    const depositeTotoal = depositeValue + deposite;
    setNewValue("deposite-blance",depositeTotoal)
    const currentTotoal = depositeTotoal + current;
   
    
    setNewValue("currnet-blance",currentTotoal)
    console.log(depositeValue)
    console.log(deposite);
    console.log(current)
})
document.getElementById("witdrow-btn").addEventListener("click", function () {
    const widtdrowValue = inputFieldValueToNumber("witdrow-input-field")
    const witdrow = strToNumFromElement("widtdrow-blance")
    const current = strToNumFromElement("currnet-blance")
    const widtdrowTotoal = widtdrowValue + witdrow;
    const curentTotal = current - widtdrowTotoal
    setNewValue("widtdrow-blance",widtdrowTotoal)
    setNewValue("currnet-blance",curentTotal)


})
//All Root Functions Are Here

function inputFieldValueToNumber(inputId){
    let inputFieldValue = document.getElementById(inputId).value;

    const strToNum = parseFloat(inputFieldValue);
    document.getElementById(inputId).value = ""   
    
    return strToNum;
}

function strToNumFromElement(elementId){
    const elementText = document.getElementById(elementId).innerText;
    const removeFirstElement = elementText.substring(1);
    const stringToNumber = parseFloat(removeFirstElement);
    return stringToNumber;  
}

function setNewValue (elementId,newValue){
    const elementName = document.getElementById(elementId);
    elementName.innerText = `$${newValue}`
}