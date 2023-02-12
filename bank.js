const currentBalnce = document.getElementById("currnet-blance");
let totalBlance = 1240
let totalDeposite = 0;
let totalWidtdrow = 0;
document.getElementById("deposite-btn").addEventListener("click", function () {
    
    const depositeValue = document.getElementById("deposite-input-field").value;
    const depositeblance = document.getElementById("deposite-blance");

    if (depositeValue > 0) {
        totalDeposite+= parseFloat(depositeValue)
        depositeblance.innerText = `$${totalDeposite}`
        totalBlance += parseFloat(depositeValue)
        currentBalnce.innerText = `$${totalBlance}`
        document.getElementById("deposite-input-field").value = ""
    }


})
document.getElementById("witdrow-btn").addEventListener("click", function () {
    const widtdrowValue = document.getElementById("witdrow-input-field").value;
    const witdrowBlance = document.getElementById("widtdrow-blance")

    if(widtdrowValue>0 && widtdrowValue <= totalBlance){
        totalWidtdrow += parseFloat(widtdrowValue)
        witdrowBlance.innerText = `$${totalWidtdrow}`
        totalBlance -= parseFloat(widtdrowValue)
        currentBalnce.innerText = `$${totalBlance}`
        document.getElementById("witdrow-input-field").value = ""
    }

})

