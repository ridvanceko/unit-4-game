$(document).ready(function () {

// Note: Mathfloor and mathrandom

	var compPick = Math.floor(Math.random() * 80) + 19;
	console.log("compPick: " + compPick);
	$(".randomNumber").html(compPick);

	var diamondOne = Math.floor(Math.random() * 12) + 1;
	console.log("Gem 1: " + diamondOne);
	$("#img1id").attr("value", diamondOne);


	var diamondTwo = Math.floor(Math.random() * 12) + 1;
	console.log("Gem 2: " + diamondTwo);
	$("#img2id").attr("value", diamondTwo);

	var diamondThree = Math.floor(Math.random() * 12) + 1;
	console.log("Gem 3: " + diamondThree);
	$("#img3id").attr("value", diamondThree);

	var diamondFour = Math.floor(Math.random() * 12) + 1;
	console.log("Gem 4: " + diamondFour);
	$("#img4id").attr("value", diamondFour);

	var wins = 0;
	console.log("wins: " + wins);

	var losses = 0;
	console.log("losses: " + losses);

	var score = 0;
	console.log("score: " + score);

	function reset() {
		diamondOne = 0;
		diamondTwo = 0;
		diamondThree = 0;
		diamondFour = 0;

		compPick = Math.floor(Math.random() * 80) + 19;
		console.log("compPick: " + compPick);
		$(".randomNumber").html(compPick);

		score = 0;
		$(".scoreDisplay").html(score);

		diamondOne = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 1: " + diamondOne);
		$("#img1id").attr("value", diamondOne);

    diamondTwo = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 2: " + diamondTwo);
		$("#img2id").attr("value", diamondTwo);

		diamondThree = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 3: " + diamondThree);
		$("#img3id").attr("value", diamondThree);

		diamondFour = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 4: " + diamondFour);
		$("#img4id").attr("value", diamondFour);



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value"));
		console.log("New Score: " + newScore);
		$(".scoreDisplay").html(newScore);

		if (newScore === compPick) {
			wins++;
			$(".wins").html("Wins: " + wins);
			console.log("Wins: " + wins);
			reset();
		}

		else if (newScore > compPick) {
			losses++;
			$(".losses").html("Losses: " + losses);
			console.log("Losses: " + losses);
			reset();
		}






	});

}); 
