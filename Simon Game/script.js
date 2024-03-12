var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//Create a new variable called level and start at level 0.
var level = 0;

//Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function () {
  if (!started) {
    //The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    started = true;
    userClickedPattern = [];
    // set timeout after restart
    setTimeout(() => {
      nextSequence();
    }, 500);
  }
});

// function for resetting game when lost
function resetGame() {
  $("#level-title").text("Press A Key to Start");
  level = 0;
  // clear all the arrays
  gamePattern = [];
  userClickedPattern = [];
  started = false;

}

// event handler whenever a button is clicked
$(".btn").click(function () {
  // timeout to check for new sequence
  setTimeout(() => {
    // get the clicked color and push into array and play animation
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    nextSequence();
  }, 500);
});

// tp create and identify the correct sequwnce by user and computer
function nextSequence() {
  // check the input from user weather its correct or not
  if (gamePattern.length >= userClickedPattern.length) {
    // comparing game sequence and user sequence after every button clicked
    for (let i = 0; i < userClickedPattern.length; i++) {
      if (gamePattern[i] == userClickedPattern[i]) {
        continue;
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("You Lost. Incorrect color choice!");
        setTimeout(() => {
          $("body").removeClass("game-over");
          resetGame();
        }, 1000);
      }
    }
  }
  // if all sequecne are correct then go for next level
  if (gamePattern.length == userClickedPattern.length){
    setTimeout(() => {
      userClickedPattern.splice(0, userClickedPattern.length);
      // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
      level++;
      
      //Inside nextSequence(), update the h1 with this change in the value of level.
      $("#level-title").text("Level " + level);

      // create random color and insert into game sequence array and play animation
      var randomNumber = Math.floor(Math.random() * 4);
      var randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);

      $("#" + randomChosenColour)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);
      playSound(randomChosenColour);
    }, 300);
  }
}

// play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// animate buttons
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 50);
}
