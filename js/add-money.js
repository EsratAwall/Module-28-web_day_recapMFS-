document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
       
       
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);
    // const addPin = document.getElementById('input-pin-number').value;
    // console.log(addMoney, addPin);

    // // wrong way to verify pin
    // if (addPin === '1234') {
    //     const balance = document.getElementById('account-balance').innerText;
    //     console.log(balance);
    //     const balanceNumber = parseFloat(balance);

    //     const newBalance = balanceNumber + addMoneyNumber;
    //     document.getElementById('account-balance').innerText = newBalance;

        
    // }else{
    //     alert('Failed to add money')
    // }
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if (isNaN(addMoney)) {
    alert('Failed to add money');
    return;
}

    // wrong way to verify do not try it at your serious website
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById('account-balance');
     const newBalance = balance + addMoney;

     document.getElementById('account-balance').innerText = newBalance;
        // add to transition history
          const p = document.createElement('p');
          p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        //   console.log(p);
        //   should be a common function
        document.getElementById('transaction-container').appendChild(p);
    
    }
    else{
        alert('Failed to add the money')
    }
    

})