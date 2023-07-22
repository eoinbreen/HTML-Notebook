// JQuery Notes

// Selecting Elements
$("h2").css("color", "red");
console.log($("h2").css("font-size")); // One input in css method gets a value, 2 inputs sets the value to the second input
$("button").css("background-color", "orange");

// Adding and removing Classes
$("h2").addClass("big-title margin-100");
$("h2").removeClass("big-title");
console.log($("h2").hasClass("margin-100")); //Checks if element has a specific class

// Text Manipulation
$("h2").html("<em> Hello World </em>"); //innerHTML
$("button").text("Don't Click Me"); //TextContent

// Attribute Manipulation
console.log($("a").attr("href"));
$("a").attr("href","https://www.yahoo.com/" );

// Event Listeners
$("h2").on("mouseover", function(){
    $("h2").toggleClass("big-title")
})


$(document).keydown(function(event){
    $("h2").text(event.key);
})

// Adding html 
$("h2").before("<button>New</button>") // Adds new html before the opening tag of the element
$("h2").after("<button>New</button> <br>") // Adds new html after the closing tag of the element
$("h2").prepend("<button>New</button>") // Adds new html at the start of the content of the element
$("h2").append("<button>New</button>") // Adds new html at the end of the content of the element

// Removing elements
// $("button").remove();

// Animations

$("button").click(function(){
    //$("h2").toggle()
    //$("h2").fadeOut()
    //$("h2").fadeIn()
    //$("h2").fadeToggle()
    //$("h2").slideUp()
    //$("h2").slideDown()
    //$("h2").slideToggle()
    $("h2").slideUp().slideDown().animate({opacity: 0.5}) //You can chain animations 
})
