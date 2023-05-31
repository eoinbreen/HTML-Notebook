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

function slice(){
    var user_input = prompt("Enter a message that you would like to send : ");
    var number = document.getElementById("slice-max").value;
    alert(user_input.slice(0, number));
}