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

// Changes the users dog age into human years
function dog_age_converter(){
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
  function age_converter(age) {
        
        var years_left = 100 - age;
        var days_left = years_left * 365;
        var weeks_left = years_left * 52;
        var months_left = years_left * 12;
        
        console.log("You have " + days_left + " days, "+ weeks_left + " weeks, and " + months_left + " months left before your 100th birthday.")
        
    }
    