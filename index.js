document.getElementById("submit-btn").addEventListener("click",function(e){
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value
    if(email === "126mehedi@gmail.com" && password === "1234"){
        window.location.href = "bank.html"
    }else{
        alert("invalid user")
    }
    document.getElementById("email-field").value = ""
    document.getElementById("password-field").value = ""
})