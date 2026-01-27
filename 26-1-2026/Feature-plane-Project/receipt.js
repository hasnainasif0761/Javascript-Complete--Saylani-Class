const receipt = JSON.parse(localStorage.getItem('receipt'));

if(!receipt){
    window.location.href = 'payment.html'
}

document.getElementById('id').innerText = receipt.transactionId;
document.getElementById('name').innerText = receipt.plan;
document.getElementById('price').innerText = `$${receipt.price}`;
document.getElementById('date').innerText = receipt.date;

document.getElementById('payBtn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payment Receipt", 70, 20);

    doc.setFontSize(12);
    doc.text(`Transaction ID : ${receipt.transactionId}`, 20, 40);
    doc.text(`Name           : ${receipt.plan}`, 20, 50);
    doc.text(`Price          : $ ${receipt.price}`, 20, 60);
    doc.text(`Date           : ${receipt.date}`, 20, 70);

    doc.save("receipt.pdf");

    localStorage.removeItem('receipt');
    window.location.href = "index.html"
});
