// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
// step-2 get the amount from the field
let depositField = document.getElementById('input-deposit')
let newDepositAmount = depositField.value

// step-3:get the previous deposit total amount
let depositTotalElement = document.getElementById('deposit-total')
let previousDepositTotal = depositTotalElement.innerText

// step-4:add numbers to the total deposit
let currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
depositTotalElement.innerText = currentDepositTotal

// step-5: balance current total

let balanceTotalElement = document.getElementById('balance-total')
let previousBalanceValue = balanceTotalElement.innerText
let balanceCalculate = parseFloat(previousBalanceValue) + parseFloat(newDepositAmount);
balanceTotalElement.innerText =balanceCalculate

// step-7:clear the deposit field
depositField.value = ''
})