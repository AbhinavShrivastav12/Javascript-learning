// 1. To display 'Good Morning' in alert popup.
alert('Good Morning');
// 2. To display your name in console.
alert("Abhinav Shrivastav");
// 3. Using math calculate 10 + 5 in console.
console.log(10 + 5); //15
// 4. Calculate 20 - 5 in the console.
console.log(20-5); //15
// 5. Calculate 2 + 2 - 5 in the console.
console.log(2+2-5); //-1
// 6. Use document.body.innerHTML to display 'Good Morning' on the web page.
document.body.innerHTML="Good Morning";
// 7. Display your name on the web page.
document.body.innerHTML="Abhinav Shrivastav";
// 8. Your order a T-shirt for $10, socks for $8, and dinner plates for $20. Use JavaScript to calculate the total cost of your order.
var t_Shirt = 10;
var socks = 8;
var dinnerPlates = 20;
var totalCost = t_Shirt+socks+dinnerPlates;
console.log("The total cost of your order is: ", totalCost); //38
// 9. Your bank account has $100, you spend $20 on launch, $50 on dinner, and earn $200 from yourjob. Calculate how much money you have.
var bankAmount = 100;
var spendOnLunch = 20;
var spendOnDinner = 50;
var earnFromJob = 200;
var leftMoney = [bankAmount+earnFromJob]-[spendOnLunch+spendOnDinner];
//or
var leftMoney = bankAmount-spendOnLunch-spendOnDinner+earnFromJob;
console.log("The money left with me is: " , leftMoney);
// 10. Use document.body.innerHTML to make the web page blank.
document.body.innerHTML= "";