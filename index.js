const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCard = document.getElementById("mastercard")
const payPal = document.getElementById("payPal");
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`
    }
    else{
        subResult.textContent = `You are not subscribed`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`
    }
    else if(masterCard.checked){
        paymentResult.textContent = `You are paying with MasterCard`
    }
    else if(payPal.checked){
        paymentResult.textContent = `You are paying with Paypal`
    }
    else{
        paymentResult.textContent = `You must select a payment type`
    }
}


