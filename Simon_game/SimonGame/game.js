//alert("Hi,I am Antra");

//$("h1").css("color", "red");


const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
    var randomNumber = math.floor(math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

}

