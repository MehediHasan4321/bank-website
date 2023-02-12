const currentBalnce = document.getElementById("currnet-blance");
let totalBlance = 1240

document.getElementById("deposite-btn").addEventListener("click", function () {
    const depositeValue = document.getElementById("deposite-input-field").value;
    const depositeblance = document.getElementById("deposite-blance");

    if (depositeValue > 0) {
        depositeblance.innerText = `$${depositeValue}`
        totalBlance += parseInt(depositeValue)
        currentBalnce.innerText = `$${totalBlance}`
        document.getElementById("deposite-input-field").value = ""
    }


})
document.getElementById("witdrow-btn").addEventListener("click", function () {
    const widtdrowValue = document.getElementById("witdrow-input-field").value;
    const witdrowBlance = document.getElementById("widtdrow-blance")

    if(widtdrowValue>0){
        witdrowBlance.innerText = `$${widtdrowValue}`
        totalBlance -= parseInt(widtdrowValue)
        currentBalnce.innerText = `$${totalBlance}`
        document.getElementById("witdrow-input-field").value = ""
    }

})

