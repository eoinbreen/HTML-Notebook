function greeting(){
    var name = prompt("What is your Name?");
    alert("Hello " + name + " it's nice to meet you!");
}

function char_count(){
    var user_input = prompt("Enter a message that you would like to send : ");
    var characters_written = user_input.length;
    var characters_remaining = 280 - characters_written;
    alert("You have written " + characters_written + " Characters, you have "+ characters_remaining + " Characters remaining.");
}

// Takes the value of a number field on the HTML page and slices the users message to that ammount of characters
function slice_message(){
    var user_input = prompt("Enter a message that you would like to send : ");
    var number = document.getElementById("slice-max").value;
    alert(user_input.slice(0, number));
}

//Use Slice to capitalise the first letter in the users input and lowercase the rest
function capitalise_name(){
    var name = prompt("What is your Name?");
    var first_letter = name.slice(0,1);
    first_letter = first_letter.toUpperCase();
    rest_of_name = name.slice(1, name.length).toLowerCase()
    name = first_letter + rest_of_name;
    alert("Hello " + name + " it's nice to meet you!");
}

function capitalise_name(name){
    var first_letter = name.slice(0,1);
    first_letter = first_letter.toUpperCase();
    rest_of_name = name.slice(1, name.length).toLowerCase()
    name = first_letter + rest_of_name;
    return name;
}
// Changes the users dog age into human years
function dogAgeConverter(){
    var dog_age = prompt("How old is your dog? ");
    human_age = ((dog_age - 2) * 4) + 21;
    alert("You're dog is " + human_age + " in human years")
}

function getMilk() { 
    var money = prompt("How much money do you have for Milk")
    cost_per_bottle = 1.5
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy " + calcBottles(money, cost_per_bottle) + " bottles of Milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    alert("You have " + calcBottles(money, cost_per_bottle) + " bottles of milk and €" + calcChange(money, cost_per_bottle) + "  change left.")
  }

// Calculates how many bottles of milk you can buy by taking in how much money you have and the cost per bottle
function calcBottles(money, costPerBottle){
var num_bottles = Math.floor(money / costPerBottle);
return num_bottles
}

function calcChange(money, costPerBottle){
var change = money % costPerBottle;
return change;
}
function ageConverter(age) {
    
    var years_left = 100 - age;
    var days_left = years_left * 365;
    var weeks_left = years_left * 52;
    var months_left = years_left * 12;
    
    console.log("You have " + days_left + " days, "+ weeks_left + " weeks, and " + months_left + " months left before your 100th birthday.")
    
}
 
//Get a random number between 1 and 6
function diceRoll(){
    var n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    if(n === 6){    //Use === rather than ==
        alert(n + ", Perfect Roll!");
    }
    else{
        alert(n);
    }
}

//Get a random number between 2 numbers
function randomNum(min, max){
    min = Number(min); // turns inputs into integers
    max = Number(max);
    if(min > max){ //checks if someone enters the figures in the wrong order, switches them around if they did
        var temp = min;
        min = max;
        max = temp;
    }
    
    rand_num = Math.floor(Math.random() * (max - min + 1))// Random number is multiplied by the difference + 1 so the maximum number is included;
    alert( rand_num + min); // Min is added to the random number to start the numbers from the minimum
}

// Takes in Weight in Kg and Height in M to calculate a persons Body Mass Index
function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    if (bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    else if (bmi >= 18.5 && bmi < 25){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    else{
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    alert(interpretation);
}

function isLeap(year)
{
    var is_leap = false;

    if(year % 100 === 0 && year % 400 !== 0){
        is_leap = false;
    }
    else if(year % 4 === 0){
        is_leap = true;
    }

    if(is_leap)
    {
        alert(year + " is a Leap Year.");
    }
    else{
        alert(year + " is not Leap Year.");
    }
    
}

function guestList(){
    var name = prompt("What is your name?");
    name = capitalise_name(name);
    var guest_list = ["Eoin", "Nicky", "Johnny", "Peter", "Mark", "Rachel", "Claire", "Elaine"]
    if(guest_list.includes(name)){
        alert("Welcome " + name + ", you were invited")
    }
    else{
        alert(name + ", you were not invited, please escort yourself off the premises")
    }
}

function whosPaying(){
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    rand = Math.floor(Math.random() * names.length);
    var name = names[rand];
    var output = name + " is going to buy lunch today!";
    
    alert(output);
}

function fizzBuzz(){
    var output = [];
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            output.push("FizzBuzz");
        }
        else if(i % 3 === 0){
            output.push("Fizz");
        }
        else if(i % 5 === 0){
            output.push("Buzz");
        }
        else{
            output.push(i);
        }
    }
    console.log(output);
}

function ninteyNineBottles(){
    var bottles = 99;
    while(bottles > 1){
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.")
        bottles --;
        console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.")
    }
    console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle  of beer.")
    console.log("Take one down and pass it around, no more bottles of beer on the wall.")

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
}

function fibonacciGenerator(iterations){
    var fibonacci = [0];
    if(iterations > 1){
        var fibonacci = [0,1];
        var newNum;
        for(var i = 2; i < iterations; i++){// start i at 2 as array already has first 2 values
            newNum = fibonacci[i-2] + fibonacci[i-1];
            fibonacci.push(newNum); 
        }
    }
    
    alert(fibonacci);
}

function add(num1, num2){
    return num1 + num2; 
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    let operator_function = window[operator]; // Allows us to call function using the name in a string
    alert(operator_function(num1, num2));
}


// Style Documentation https://www.w3schools.com/jsref/dom_obj_style.asp

function change_text(){
    first_link = document.querySelector(".dom-manipulation a")
    first_link.textContent = "Yahoo"
    first_link.setAttribute("href", "https://www.yahoo.com")
    
    list_link = document.querySelector(".list a");
    list_link.style.color = "red";
    
    second = document.querySelectorAll(".dom-list li")[1];
    second.innerHTML = "Hello";
    
    third = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
    third.textContent = "My Name is Eoin";
    

}

function checkbox(){
    var checkbox = document.getElementById("myCheck");
    var button = document.getElementsByClassName("myButton")[0];

    if(checkbox.checked == true){
        button.style.backgroundColor = "yellow";
    }
    else{
        button.style.backgroundColor = "red";
    }
}

function visibility(){
    var checkbox = document.querySelector("#visCheck");
    var button = document.getElementsByClassName("myButton")[0];
    document.querySelector("h3").classList.toggle("huge");

    if(checkbox.checked == true){
        button.classList.add("invisible");
    }
    else{
        button.classList.remove("invisible");
    }
}