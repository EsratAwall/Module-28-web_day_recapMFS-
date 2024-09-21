document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
   
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    
      if (isNaN(cashOut)) {
        alert('Failed to cash Out');
        return;
      }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
       

           if (cashOut> balance) {
            alert('You do not have enough money to cash Out');
            return;
           }


        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transition history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class= "text-2xl font-bold">Cash Out</h4>
        <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('No money for you');
    }
    
})