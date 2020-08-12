// Chapter no 21 to 25

// Task no 1

var firstName  =  prompt("Enter first name");
var lastName = prompt("Enter last Name");
var fullName = firstName+lastName;
alert(" Welcome to " + fullName);



// Task no  2

// one way


var mobile  = prompt("enter the mobile model");
for( var i =0 ; i<mobile.length; i++){
    var len = mobile[i];
}
document.write("My favourite phone is: " + mobile + "<br>");
document.write("Length of string: " +len);

// second way

var mobile = prompt("Enter your favorite mobile phone model");
var len = mobile.length;

document.write("My favourite phone is: " + mobile + "<br>");
document.write("Length of string: " +len);



// task no 3 one way

var name = "pakistani";
var index;
for(var  i = 0; i<name.length;i++){
    if(name[i]==='n'){
        document.writeln("String: " + name + "<br>");
        index=i;
        document.writeln("Index of 'n': " +index);   
    }
}

// second way
var name = "pakistani";
var  index = name.indexOf("n");
document.writeln("String: " + name + "<br>");
document.writeln("Index of 'n': " +index);


// task no 4
var name = "hello world";
var index;
for (var i = name.length - 1; i >= 0; i--) {
    if (name[i] === 'l') {
        document.writeln("String: " + name + "<br>");
        index = i;
        document.writeln("Index of 'l': " + index);
        break;
    }
}


var name = "Hello World";
var  index = name.indexOf("l",5);
document.writeln("String: " + name + "<br>");
document.writeln("Index of 'l': " +index);


// task no 5 

var name = "Pakistani";
document.writeln("String: " + name + "<br>");
var index = name[3];
document.writeln("Character at index 3: "  + index);



// / Task  No 6


var firstName  =  prompt("Enter first name");
var lastName = prompt("Enter last Name");
var fullName = firstName.concat(lastName);
alert(" Welcome to " + fullName);



// Task No 7        

var name = "hyderabad";
var replace = "islam";
name = name.slice(5,9);
var con =  replace.concat(name);
alert(con);

// Task no 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

for (var i = 0; i <message.length; i++) {
    if (message.slice(i, i + 3) === "and") { 
    message = message.slice(0, i) + "&" + message.slice(i + 3);
    }
}
console.log(message);

var message = "Ali and Sami are best friends. They play cricket and football together.";

var message1 = message.replace(/and/g,'&');
document.writeln(message1);

// Task No 9

var num ="472";
var type = "string";
document.writeln("value: " +num + "<br>");
document.writeln("Type: " + type +"<br>");
// two method use for convret the string into integer 
Number(num);
parseInt(num);
document.writeln("value: " +num + "<br>");
document.writeln("Type: number" + "<br>");

// Task No 10

var value = prompt("Enter the value in small letters");
document.writeln("User input: " + value + "<br>");
document.writeln("Uppercase: " +value.toUpperCase());


// Task No 11


var value = prompt("Enter any value");
var val = value.slice(0,1);
var val2 = value.slice(1);
val = val.toUpperCase();
val2 = val2.toLowerCase();
var merge = val.concat(val2);
// alert(merge);
document.writeln("UserInput: " + value + "<br>");
document.writeln("TitleCase: " + merge + "<br>");


// Task No 12

var num = 35.36;
var result = num.toString();
result= result.replace('.', "");
document.writeln("Number =" + num + "<br>");
document.writeln("Result =" + result + "<br>");


// Task No 13

var username = prompt("Enter your name without symbol");
var check = /^[A-Za-z]+$/;
if(username.match(check)){
    alert("Valid Username");
}
else{
    alert("Please enter a valid username");
}

// Task No 14

var a =["cake","apple pie","cookie","chips","patties"];
var flag = false;
var x = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var item = x.toLowerCase();
for(var i=0;i<=a.length;i++){
    if(item === a[i]){
        flag = true;
        document.write(item + " is available at index " + i + " in our bakery");
    }
}

if(flag == false){
    document.write("We are sorry. "+ item +"  is not available in our bakery");
}


// task no 15


var  password = prompt("Enter your password");
var check = /^[A-Za-z]\w{7,15}$/;
if(password.match(check)){
    alert("your password is strong");

}
else{
    alert(" enter a valid password");

}


// Task no 16

var university = "University of karachi";
for(var  i = 0; i<university.length;i++){
    document.writeln(university[i] + "<br>");
}


// Task no 17

var name =prompt("Enter any string");
document.writeln("User Input " + name + "<br>");
var index = name.charAt(name.length-1);
document.writeln("last character " + index + "<br>");


// Task no 18

var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
var match;
match = text.match(/the/gi);
document.writeln("Text: " + text +  " <br>");
document.writeln("There are " +match.length+ " occurrence(s) of the word " +match);



// Chapter no 26 to 30


// Task No 1

var  num = +prompt("Enter any positive value in floating point");
if(num>0){
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);
    document.writeln("Number " + num + "<br>");
    document.writeln("Round Off value " + round + "<br>");
    document.writeln("Floor value " + floor + "<br>");
    document.writeln("Ceil value " + ceil + "<br>");
}
else{
    document.writeln("Please enter  a positive value");
}

// Task No 2

var  num = +prompt("Enter any negative value in floating point");
if(num<0){
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);
    document.writeln("Number " + num + "<br>");
    document.writeln("Round Off value " + round + "<br>");
    document.writeln("Floor value " + floor + "<br>");
    document.writeln("Ceil value " + ceil + "<br>");
}
else{
    document.writeln("Please enter  a negative value");
}


// Task No 3 

var num = +prompt("Enter any value for absolute value");
var  value = Math.abs(num);
document.writeln("The absolute value of " + num + " is " + value );



//  Task No 4

var dice = Math.ceil(Math.random()*6);
alert("Random dice value is: " + dice);



// / Task No 5


var  coin1 = "head";
var  coin2 = "tails";
var value =Math.ceil(Math.random()*2)
    if(value===1){
        document.writeln("Random coin value: " + coin1);
    }
    else{
        document.writeln("Random coin value: " + coin2);
    }



// Task No 6

var num = Math.floor(Math.random()*100);
alert("Random Number among 1 to 100 = "+ num);



//   Task No 7

var userInput = prompt("Enter your age in Kg kilograms");
var convert = parseInt(userInput);
document.writeln("The weight of user is " + userInput + " Kilograms");



// task No 8 

var num = +prompt("Enter a number among 1 to 10");
var secretNumber = Math.ceil(Math.random()*10)
if(num === secretNumber){
    alert("congrats buddy you get the number " + secretNumber);
}
else{
    alert("Try again");
}


//      Chapter No 31 to 34


//  Task No 1



var currentTime = new Date();
alert(currentTime);


// Task no 2 

var date = new Date();
var convert = date.toString();
var month = convert.slice(4,7);
alert("Current month: " + month);


// task No 3


var date = new Date();
var convert = date.toString();
var day = convert.slice(0,3);
alert("Current month: " + day);


// Task No 4

var days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentDate = new Date();
var funDay = currentDate.getDay();
if(funDay===0|| funDay==6){
    alert("it's a fun day");
}



//      Task No 5

var date = new Date();
var gettingDate = date.getDate();

if(gettingDate<=15){
    alert("First Fifteen Days of the month");
}
else{
    alert("Last days of the month");
}


// task no 6

var date = new Date();
var getTime = date.getTime();
var getMinutes = getTime/1000;
getMinutes = getMinutes*60*60;
document.writeln("Current date: " + date +"<br>");
document.writeln("Elapsed milliseconds since january 1, 1970: " + getTime +"<br>");
document.writeln("Elapsed minutes since january 1, 1970: " + getMinutes +"<br>");


//      Task No 7

var date = new Date();
var getHour = date.getHours();
if(getHour<=12){
    alert("Its A.M");
}
else{
    alert("Its P.M")
}


//      Task No 8

var laterDate = new Date("Dec, 31, 2020");
alert("Later Date: " +laterDate);


// Task No 9

var thisRamdan = new Date("Apr, 24, 2020");
var thisRamdanTime = thisRamdan.getTime();
var lastRamdan = new Date("June, 18, 2015");
var lastRamdanTime = lastRamdan.getTime();
var difference = thisRamdanTime - lastRamdanTime;
var convertDays = difference / (1000*60*60*24);
document.writeln(convertDays+" days have passed since 1st ramadan, 2015 <br>");


//      Task No 10

var date = new Date("Dec, 05 , 2015 22:50:16");
var referenceTime = date.getTime();
var beginningDate = new Date("Jan, 01, 2015 00:00:00");
var beginningTime = beginningDate.getTime();
var difference = referenceTime - beginningTime;
var convertSeconds = difference / (1000*60);
convertSeconds = Math.ceil(convertSeconds);
document.writeln("On reference date " +date + "<br>")
document.writeln( convertSeconds + " seconds had passed since beginning of the 2015");


//      Task No 11 

var  date = new Date();
document.writeln("Current Date: " + date + "<br>");
date.setHours(11);
document.writeln("1 hour Ago, it was:  " + date + "<br>")

//      Task No 12

var  date = new Date();
document.writeln("Current Date: " + date + "<br>");
date.setFullYear(1920);
document.writeln("100 years back: " + date + "<br>");


// task no 13

var age = +prompt("Enter your age");
document.writeln("Your age is " + age + "<br>");
var date = new Date();
var currentYear = date.getFullYear();
var dobYear = currentYear-age;
document.writeln("Your Birth year is " + dobYear);

//      task no 14

document.writeln("<h1>K-Electric Bill</h1>");
var customerName = prompt("Enter Your Name");
document.writeln("Customer Name: " + customerName + "<br>");
var billMonth = prompt("Enter Month");
document.writeln("Month: " + billMonth + "<br>");
var units = +prompt("Enter the consuming units");
document.writeln("Number of Units: " + units + "<br>");
var chargesUnits = prompt("Enter the charges of Per Unit");
document.writeln("Charges per unit: " + chargesUnits + "<br><br><br><br>");

var lateCharges = 350;
var lateAmount;

var netAmount = units * chargesUnits;
lateAmount = netAmount + lateCharges;

var date = new Date();
var dueDate = date.getDate();
if(dueDate>=15 && dueDate <=31){
    document.writeln("Net Amount Payable (within Due Date): " + netAmount + "<br>");
    document.writeln("Late Payment surcharges: " + lateCharges + "<br>");
    document.writeln("Gross Amount Payable (after Due Date): " + lateAmount + "<br>");
}
else{ 
    document.writeln("Net Amount Payable (within Due Date): " + netAmount + "<br>");
}

//      Chapter no 35 to 38

// Task No 1

function date(){
    var current = new Date();
    alert(current);
}
date();



//  Task No 2   

function greeting(){
    var firstName = prompt("Enter First Name");
    var lastName = prompt(" Enter Last name ");
    var fullName = firstName.concat(lastName);
    alert("Welcome " + fullName);
}
greeting();



//   Task no 3


function sum(num1,num2){
    alert(+num1+num2)
}
sum(num1=+prompt("Enter 1st value"),num2=+prompt("Enter 2nd value"));

// Task No 4

function sum(num1,num2,operator){
    if(operator==='+'){
        alert(+num1+num2);
    }
    else if(operator==='-'){
        alert(num1-num2);
    }
    else if(operator==='*'){
        alert(num1*num2);
    }
    else if(operator==='/'){
        alert(num1/num2);
    }
    else if(operator==='%'){
        alert(num1%num2);
    }
    else{
        alert("you have choose incorrect operator");
    } 
}
sum(num1=prompt("Enter 1st value"),num2=+prompt("Enter 2nd value"),prompt("Enter the operation sign you want to perform"));

// Task no 5 


function square(num){
     num = num*num;
    alert(num);
}
var num = parseInt(prompt("Enter the value"));
square(num);

//   Task No 6
function factorial(){
var num,i;
num = parseInt(prompt("enter the value for factorial"));
var fact=1;
for(i = num ;i>=1;i--){
    fact = fact*i;
}
alert(fact);
}
factorial();


//   Task no 7

function counting() {
    var start = parseInt(prompt("Enter the starting counting value"));
    var end = parseInt(prompt("Enter the value where ending of counting"));
    document.writeln("Counting<br>");
    for (var i = start; i <= end; i++) {
        document.writeln(i + "<br>");
    }
}
counting();


//   Task No 8

var base = parseInt(prompt("Enter base"));
var perpendicular = parseInt(prompt("Enter perpendicular"));
var hypo,baseSquare,perpendicularSquare,hypoSquare;
function hypotenuse() {
    document.writeln("the user give the base " + base + "<br><br><br>");
    document.writeln("the user give the perpendicular " + perpendicular + "<br><br><br>");
    hypo = +base + perpendicular;
    document.writeln("After calculating the base and perpendicular the hypotenuse is " + hypo + "<br><br><br>");
    function square() {
        baseSquare=base*base;
        document.writeln("the base is after calculating the square " + baseSquare + "<br><br><br>");
        perpendicularSquare=perpendicular*perpendicular;
        document.writeln("the perpendicular is after calculating the square " + perpendicularSquare + "<br><br><br>");
        hypoSquare = hypo*hypo;
        document.writeln("the hypotenus is after calculating the square " + hypoSquare + "<br><br><br>");
    }
    square();
    var totalHypo = +baseSquare + perpendicularSquare;
    document.writeln("The hypotenus after calculating " + Math.sqrt(totalHypo) + "<br><br><br>");
}
hypotenuse();


// Task No 9

var a;
function rectangle(width,height){
    return a = width * height;
}
var width =+prompt("Enter the width of rectangular");
var height =+prompt("Enter the height of rectangular");
alert(rectangle(width,height));


// Task No 10


var  word = prompt("Enter your word");
function palindrome(word){
var check= "";
for (var i = word.length-1;i>=0;i--){
    check += word[i];
}
if(word===check){
    alert("your word is palindrome");
    return word;
}
else{
    alert("your word is not a palindrom");
}
}
palindrome(word);



// Task No 11

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 var text =prompt("Enter the string in any case");
 document.write(titleCase(text));


//      Task No 12

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
var long = prompt("Enter the sentence");
document.writeln(find_longest_word(long));


//  Task No 13

function charCount(str, letter) 
{
 var letterCount = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
document.writeln(charCount('JSResourceS.com', 'o'));


//  Task No 14

var radius = 20;
var  circumference;
var pi = 3.142;
var area;
function  calcCircumference(radius){
   return circumference = 2 * pi * radius;
}
function calcArea(area){
    return area = pi* radius * radius;
}
document.writeln("The circumference is  "+ calcCircumference(radius) + " <br>");
document.writeln(" The area is "+ calcArea(area)+"<br>");
