var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var cry1Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var cry2Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var cry3Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var cry4Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function shuffleCrystalValues(){
	cry1Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	cry2Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	cry3Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	cry4Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}




function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#randomNumber').text(computerChoice);
		userTotalScore = 0;
		$('#currentScoreCounter').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#randomNumber').text(computerChoice);
		userTotalScore = 0;
		$('#currentScoreCounter').text(userTotalScore);
		shuffleCrystalValues();
	}
}


$('#randomNumber').text(computerChoice);



$('#cry1').on('click', function(){
	userTotalScore += crys1Choice;
	console.log("new userTotalScore" + userTotalScore);
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();

	
});


$('#cry2').on('click', function(){
	userTotalScore += crys2Choice;
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();
});


$('#cry3').on('click', function(){
	userTotalScore += crys3Choice;
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();
});


$('#cry4').on('click', function(){
	userTotalScore += crys4Choice;
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();
});