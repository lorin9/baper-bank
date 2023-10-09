document.getElementById('btn-withdraw').addEventListener('click',function(){
   let withdrawField = document.getElementById('input-withdraw')
   let withdrawFieldValue = withdrawField.value
   
   let withdrawTotalElement = document.getElementById('withdraw-total')
   let withdrawTotalValue = withdrawTotalElement.innerText;
   let withdrawCalculation = parseFloat(withdrawFieldValue) + parseFloat(withdrawTotalValue);
   withdrawTotalElement.innerText = withdrawCalculation

   let balanceTotalElement = document.getElementById('balance-total')
   let previousBalanceValue = balanceTotalElement.innerText
   let balanceCalculate = parseFloat(previousBalanceValue) - withdrawCalculation;
   balanceTotalElement.innerText = balanceCalculate

   withdrawField.value = ''
})