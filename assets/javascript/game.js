var targetNumber = Math.floor((Math.random()* 100) +1);
      
      $("#randomNumber").text(targetNumber);

      var counter = 0;
    //value numbers for each crystal
      var numberOptions = [10, 7, 2, 21];
    
    //cristal functions
      $(".crystal-image1").on("click", function() {
         var increment = numberOptions[0];
        
         counter += increment;
         $("#currentScoreCounter").text(counter);
        console.log("New score: " + counter);
    

      if (counter === targetNumber) {
         $("#win_or_lose").text("You win!");
         $("#win-counter").text("1");
         
        console.log("You win!");
        
      }

      else if (counter >= targetNumber) {
        $("#win_or_lose").text("You Lose!");
        $("#loss-counter").text("1");

        console.log("You lose!");
        
        }
       
     });

      $(".crystal-image2").on("click", function() {
        var increment = numberOptions[1];
        counter += increment;
         $("#currentScoreCounter").text(counter);
        console.log("New score: " + counter);
    

      if (counter === targetNumber) {

        console.log("You win!");

      }

      else if (counter >= targetNumber) {
        console.log("You lose!");
      }
      });


      $(".crystal-image3").on("click", function() {
        var increment = numberOptions[2];
        counter += increment;
         $("#currentScoreCounter").text(counter);
        console.log("New score: " + counter);
    

      if (counter === targetNumber) {

        console.log("You win!");
      }

      else if (counter >= targetNumber) {
        console.log("You lose!");
      }
      });


      $(".crystal-image4").on("click", function() {
         var increment = numberOptions[3];
        counter += increment;
         $("#currentScoreCounter").text(counter);
        console.log("New score: " + counter);
    

      if (counter === targetNumber) {

        console.log("You win!");
      }

      else if (counter >= targetNumber) {
        console.log("You lose!");
      }
      });
//trying to finish game here 
function updateGame () {
  if ( counter === targetNumber) {

  }
}
