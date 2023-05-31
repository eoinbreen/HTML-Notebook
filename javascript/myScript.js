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