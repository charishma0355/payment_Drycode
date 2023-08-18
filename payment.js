document.getElementById('payButton').addEventListener('click', function() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simulate payment processing
    setTimeout(function() {
        document.getElementById('paymentResponse').innerHTML = 'Payment successful!';
    }, 2000);
});