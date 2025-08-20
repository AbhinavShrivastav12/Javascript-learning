// 1. At a resturant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice-cream for $5. Use JavaScript to calculate the cost of the order.
var soup = 10;
var burgers = (8*3)
var ice_cream = 5
//calculation of total cost of the order
var totalCost = (soup+burgers+ice_cream)
console.log("Total cost for each items: ",totalCost)//39
// 2. You're at a resturant with 2 friends (3 people in total) and make the same order as in question 1. calculate how much each person pays.
var totalPeople = 3
//same as Q.1
var eachPersonPays = (totalCost/totalPeople);
console.log("The amount each person pays is: ", eachPersonPays);
// 3. Calculate the total cost of the toster ($18.50) and 2 shirts ($7.50 each).
var costOfToster = 1850
var costOfShirt = 750*2 // for 2 shirt each per $7.50 
var newTotalCost = (costOfToster+costOfShirt); //3350
var totalNumber = (newTotalCost/100); //33.5
console.log("The total cost for toaster and shirt are: ", totalNumber);
// 4. Calculate a 10% tax of the total of question 3
var tax = 0.10
var afterTax = tax*totalNumber;
console.log("The total tax amount of 10% is : ",afterTax); //3.35
// 5. Calculate a 20% tax for the total in question 3 (remember that 1% = 1/100, so 20% = 20/100)
var newTax = 0.20
var newAfterTax = totalNumber*newTax;
console.log("The tax amount of 20% is: ", newAfterTax); //6.7

//new questions
// Note: Fahrenheit = (Celcius * 9/5)+32
// Celcius = (Fahrenheit-32)*5/9
//6. The temperature is 25°C(Alt + 0176 for °). Calculate the temperature in Fahrenheit.(77)
var celcius = 25
var fahrenheitFormula = (celcius * 9/5) + 32;
console.log("The fahrenheit of 25°C is: " + fahrenheitFormula + "°F")//77
// 7. The temperature is 86°F. Calculate the temperature in Celcius.(30)
var fahrenheit = 86;
var celciusFormula = (fahrenheit-32)*5/9;
console.log("The fahrenheit of 25°C is: " + celciusFormula + "°C");
// 8. The temperature is -5°C. Calculate the temperature in Fahrenheit. (23) 
var celcius = -5
var fahrenheitFormula = (celcius * 9/5) +32;
console.log("The temperature of -5°C is: " + fahrenheitFormula + "°F");