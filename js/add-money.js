document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const addPin = document.getElementById('input-pin-number').value;
    console.log(addMoney, addPin);

    // wrong way to verify pin
    if (addPin === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;

        
    }else{
        alert('Failed to add money')
    }
    
})