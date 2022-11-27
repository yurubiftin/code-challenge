const prompt= require("prompt-sync")();
var speed = prompt("Enter your speed")
//if the speed is less than 70 , it should print "Ok"
if(speed<70){
    console.log("Ok")} 
else
{
console.log("Points:"+((speed-70)/5));
//if the driver gets more than 12 points, the function should print: "Licence suspended".
if((speed-70)/5>12)
console.log(LicenseSuspended);
}