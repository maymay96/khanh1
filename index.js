function calculateSalary() {
    
    var workingDays = parseInt(document.getElementById('working-days').value);
    var dailySalary = parseFloat(document.getElementById('daily-salary').value);

   
    var totalSalary = workingDays * dailySalary;

 
    document.getElementById('salary-result').textContent = "Employee's Salary: $" + totalSalary.toFixed(2);
  }