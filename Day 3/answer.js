// 1. Create the text 'My name is: ' as a string.
var text = 'My name is: '
console.log(text)
// 2. Create your name as a string (for example: 'Abhi')
var textName = 'Abhinav';
console.log(textName);
// 3. Using concatention, add the 2 strings from 1 and 2 together to create the text: 'My name is: _____'(replace ___ with your name).
var newText= text + textName;
console.log(newText)
// 4. At a resturant, your order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatention, create the text: 'Total cost: $____'.
var coffee = 5
var bagel = 3
var total_cost = coffee + bagel;
console.log('Total cost: $'+total_cost);
// 5. Do the same thing in 4, but use a template string and interpolation.
var newTotal = `Total cost: $${coffee+bagel}`;
console.log(newTotal);
// 6. Display the text from 5 in a popup using alert().
alert(newTotal);
// 7. Your order 1 coffee ($5.99) and 1 bagel (@2.95). Using math, calculate the total cost, and using concatention, create the text 'Total cost: $___'.
var newCoffee = 599
var newBagel = 295
var newTotalCost = (newCoffee+newBagel)/100;
console.log('Total Cost: $'+newTotalCost);
// 8. Do the same thing as 7, but use a template string and interpolation.
var new_total_cost = `Total cost: $${(newCoffee+newBagel)/100}`
console.log(new_total_cost)
// 9. Display the text from 8 in a popup.
alert(new_total_cost);
// 10. Using a multi-line string, create a text from 8 and add a line of text underneath: 'Thank you,come again!'. Display both lines in a popup.
alert('Thank You\n Come again')