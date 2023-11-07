const bill = document.getElementById('bill');
const tipValue = document.querySelector('.tip-value');
const totalValue = document.querySelector('.total-value');
const selectTip = document.querySelectorAll('input[name = "tip"]');
const numberOfPeople = document.getElementById('people');
const errorText = document.getElementById('error-text');
const resetBtn = document.querySelector('.reset-btn');

let tipPercentage = 0;

function updateValue(billAmount, tipPercentage) {
    const totalPeople = parseInt(numberOfPeople.value || '1');
    const tipAmount = (tipPercentage/ 100) * billAmount;

    const tipAmountPerPerson = tipAmount / totalPeople;
    const total = billAmount + tipAmount;
    const totalPerPerson = total /totalPeople;   
    tipValue.innerText = `$${tipAmountPerPerson.toFixed(2)}`;

    totalValue.innerText =  `$${totalPerPerson.toFixed(2)}`;
}

function getBill() {
    return billAmount = parseFloat(bill.value || "0");
}
bill.addEventListener('input', (e) => {
    return updateValue(getBill(), tipPercentage);
})

selectTip.forEach((tip) => tip.addEventListener('input', (e) => {
    const billAmount = parseFloat(bill.value || "0");
    tipPercentage = parseInt(e.currentTarget.value);
    return updateValue(getBill(), tipPercentage);
    
}))

numberOfPeople.addEventListener('input', (e) => {
    if (e.currentTarget.value === '0') {
        errorText.classList.add('show');
        numberOfPeople.classList.add('show-error');
    } else {
        errorText.classList.remove('show');
        numberOfPeople.classList.remove('show-error');
    }
    updateValue(getBill(), tipPercentage);
})

resetBtn.addEventListener("click", () => {
    document.getElementById('form-container').reset();
    tipPercentage = "0";
    document.querySelectorAll('input[name = "tip"]').forEach((tip) => {
        tip.checked = false;
    });

    updateValue(0,0);
});