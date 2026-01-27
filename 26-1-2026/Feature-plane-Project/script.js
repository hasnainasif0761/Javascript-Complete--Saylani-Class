const plans = [
    { id: 'starter', price:19 },
    { id: 'Advance', price:29 },
    { id: 'Premium', price:49 }
];

function planCheck(plan) {

    let seletedPlane = null

    for (let i = 0; i < plans.length; i++) {
        if (plans[i].id == plan) {
            seletedPlane = plans[i];
            break;
        }
    }

    if(seletedPlane){
        localStorage.setItem('plan',JSON.stringify(seletedPlane));
    }

    window.location.href = "payment.html";
    
    
}