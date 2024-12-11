document.getElementById('riki-geeks').addEventListener('submit', function(event) {
    event.preventDefault();

    let cardNumber = document.getElementById('Card#').value;
    let cvc = document.getElementById('CVC#').value;
    let firstName = document.getElementById('First Name').value;
    let lastName = document.getElementById('Last Name').value;
    let state = document.getElementById('state').value;
    let postalCode = document.getElementById('Postal Code').value;

    if (!cardNumber || !cvc || !firstName || !lastName || !state || !postalCode) {
        document.getElementById('error-alert').style.display = 'block';
    } else {
        document.getElementById('error-alert').style.display = 'none';
        alert("Form submitted successfully!");
    }
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('riki-geeks').reset();
    document.getElementById('error-alert').style.display = 'none';
});
