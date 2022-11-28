const prompt = require("prompt-sync")();
var basic_salary = parseInt(basic_salary);
basic_salary = prompt("Enter your basic salary");
var benefits = parseInt(benefits);
benefits = prompt("Enter your benefits");
benefits = parseInt(benefits);
var gross_salary = parseInt(basic_salary) + parseInt(benefits);
//calculate payee
var payee = parseInt(payee);
if (gross_salary <= 24000) {
  payee === gross_salary * 0.1;
} else if (gross_salary > 24000 && gross_salary <= 32333) {
  payee === gross_salary * 0.25;
} else {
  payee === gross_salary * 0.3;
}
//calculate NSSFDeduction
var NSSF = parseInt(NSSF);
NSSF === (gross_salary * 6) / 100;
//calculate NHIFDeduction
var NHIF = parseInt(NHIF);
if (gross_salary >= 0 && gross_salary <= 5999) {
  NHIF === 150;
} else if (gross_salary >= 6000 && gross_salary <= 7999) {
  NHIF === 300;
} else if (gross_salary >= 8000 && gross_salary <= 11999) {
  NHIF === 400;
} else if (gross_salary >= 12000 && gross_salary <= 14999) {
  NHIF === 500;
} else if (gross_salary >= 15000 && gross_salary <= 19999) {
  NHIF === 600;
} else if (gross_salary >= 20000 && gross_salary <= 24999) {
  NHIF === 750;
} else if (gross_salary >= 25000 && gross_salary <= 29999) {
  NHIF === 850;
} else if (gross_salary >= 30000 && gross_salary <= 34999) {
  NHIF === 900;
} else if (gross_salary >= 35000 && gross_salary <= 39999) {
  NHIF === 950;
} else if (gross_salary >= 40000 && gross_salary <= 44999) {
  NHIF === 1000;
} else if (gross_salary >= 45000 && gross_salary <= 49999) {
  NHIF === 1100;
} else if (gross_salary >= 50000 && gross_salary <= 59999) {
  NHIF === 1200;
} else if (gross_salary >= 60000 && gross_salary <= 69999) {
  NHIF === 1300;
} else if (gross_salary >= 70000 && gross_salary <= 79999) {
  NHIF === 1400;
} else if (gross_salary >= 80000 && gross_salary <= 89999) {
  NHIF === 1500;
} else if (gross_salary >= 90000 && gross_salary <= 99999) {
  NHIF === 1600;
} else {
  NHIF === 1700;
}
//calculate Total_deduction
var Total_deduction = parseInt(Total_deduction);
Total_deduction = payee + NSSF + NHIF;
//calculate net_income
var net_income = parseInt(net_income);
net_income === parseInt(gross_salary - Total_deduction);
console.log("Your gross salary is " + gross_salary);
console.log("Total amount to be deducted is" + Total_deduction);
console.log("Your net income  is " + net_income);



