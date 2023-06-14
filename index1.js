document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositFild = document.getElementById('depo-amnt-input');
    const newDepositAmmountString = depositFild.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    depositFild.value = '';
    if (isNaN(newDepositAmmount)) {
        alert('provied a valid number');
        return;
    }

    const depoTotalAmmount = document.getElementById('deposit-total');
    const depoTotalString = depoTotalAmmount.innerText;
    const depoTotal = parseFloat(depoTotalString);

    const newdepoAmmount = depoTotal + newDepositAmmount;
    depoTotalAmmount.innerText = newdepoAmmount;

    const balance = document.getElementById('balance-total');
    const balanseString = balance.innerText;
    const Balancefloat = parseFloat(balanseString);

    const newdepositTotal = Balancefloat + newDepositAmmount;
    balance.innerText = newdepositTotal;
})
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const inputWitdrow = document.getElementById('withdrow-input');
    const inputWitdrowString = inputWitdrow.value;
    const newWitdrowValue = parseFloat(inputWitdrowString);
    inputWitdrow.value = '';
    // if (isNaN(newWitdrowValue)) {
    //     alert('provied a valid number');
    //     return;
    // }

    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowString = withdrowTotal.innerText;
    const intgerwithdrowValue = parseFloat(withdrowString);

    const withdrowBalance = document.getElementById('balance-total');
    const withdrowBalanseString = withdrowBalance.innerText;
    const BalanceNumber = parseFloat(withdrowBalanseString);
    if (newWitdrowValue > BalanceNumber) {
        alert('not found');
        return;
    }
    const newTotalWithdrow = intgerwithdrowValue + newWitdrowValue;
    withdrowTotal.innerText = newTotalWithdrow;

    const newValue = BalanceNumber - newWitdrowValue;
    withdrowBalance.innerText = newValue;



})