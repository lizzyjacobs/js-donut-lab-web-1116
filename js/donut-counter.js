//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
var guest_num = prompt("How many guests?");
var donut_num = prompt("How many donuts?")
var guests = parseInt(guest_num)
var donuts = parseInt(donut_num)

if (guests <= donuts) {
  window.alert(`There are enough donuts! We have ${guests} guests and ${donuts} donuts.`);
} else {
  window.alert(`There are NOT enough donuts! We have ${guests} guests and ${donuts} donuts.`);
}
