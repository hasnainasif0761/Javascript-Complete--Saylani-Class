const stripe = Stripe("pk_test_12345");

const plan = JSON.parse(localStorage.getItem('plan'));

if(!plan){
    Toastify({
        text: "No plan Selected",
        backgroundColor: 'green'
    })
    window.location.href = 'index.html'
}else
{
    document.getElementById('planInfo').innerText = 
    `
    Plan: ${plan.id.toUpperCase()} - ${plan.price}/month
    `
}

document.getElementById('payBtn').addEventListener('click',()=>{
    Toastify({
        text: "Processing Payment....",
        backgroundColor: "green"
    }).showToast();
    setTimeout(()=>{
        Toastify({
            text: "Payment Successfully 🎉",
            backgroundColor: "#4CAF50"
        }).showToast()
        window.location.href = 'receipt.html'
    },2000);
    const receipt = {
        plan: plan.id,
        price:plan.price,
        date:new Date().toLocaleString(),
        transactionId: "tr_demo" + Math.floor(Math.random()*1000)
    }

    localStorage.setItem('receipt',JSON.stringify(receipt));
    localStorage.removeItem('plan');
    window.location.href = 'receipt.html';
})










