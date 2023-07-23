function calculateAverage() {

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    var num5 = parseFloat(document.getElementById('num5').value);


     var sum = num1 + num2 + num3 + num4 + num5;
     var average = sum / 5;
     document.getElementById('average-result').textContent ="The Average is: $" + average.toFixed(2);
}
