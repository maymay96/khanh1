function convertCurrency() {
  
  var usdAmount = parseFloat(document.getElementById('usd-amount').value);
  var conversionRate = 23656;
  var vndAmount = usdAmount * conversionRate;

   document.getElementById('vnd-result').textContent =
    "The equivalent amount in VND is: " + vndAmount.toLocaleString();

   return false;
}