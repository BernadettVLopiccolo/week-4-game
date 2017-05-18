$(document).ready(function() {

var targetNumber;

var counter = 0;
var wins = 0;
var losses = 0;

//value numbers for each crystal
var numberOptions = [10, 7, 2, 21];
 

function reset() {
  counter = 0;
  targetNumber = Math.floor((Math.random() * 100) + 20);
  $("#randomNumber").text(targetNumber);
  
}

function writeWinLose() {
  $("#win-counter").text(wins);
  $("#loss-counter").text(losses);

}


function updateGame(id) {
  var increment = numberOptions[id];
  counter += increment;
  $("#currentScoreCounter").text(counter);
  console.log("New score: " + counter);
  $("#win_or_lose").text(" ");

  if (counter === targetNumber) {
    wins++;
    $("#win_or_lose").text("You win!");
    $("#currentScoreCounter").text(" "); 
    console.log("You win!");
 
    
      reset();
    
      writeWinLose();
    
   

  } else if (counter >= targetNumber) {
    losses++;
    $("#win_or_lose").text("You Lose!");
    $("#currentScoreCounter").text(" "); 
     console.log("You lose!");
      reset();
      writeWinLose();
   
  }
}


$(".crystal-image").on("click", function() {
  var id = $(this).attr("data-crystal-id");
  updateGame(parseInt(id));

});

reset();
writeWinLose();
});
