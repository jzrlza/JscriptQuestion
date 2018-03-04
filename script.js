var json = null;

$.getJSON('qa.json', function(data) {
        
           json = data;
    });

function fiveQuestions(){
	initQuestions();
	console.log(json);
	question = document.getElementById("curr_question");

	answers = document.getElementsByClassName("answer");

	//randomize number from 0 to 14
	//no duplicate number
	//5 numbers
	//keep it in set
	var indices = [];

	question.innerHTML = json.questions[0].question;

	answers[0].innerHTML = json.questions[0].choices[0].name;
	answers[1].innerHTML = json.questions[0].choices[1].name;
	answers[2].innerHTML = json.questions[0].choices[2].name;
	answers[3].innerHTML = json.questions[0].choices[3].name;
	
	for(var i = 0; i < 5; i++){

		//get questions and answers


		//then wait for user to click any answer

	}
}

function tenQuestions(){
	initQuestions();

	for(var i = 0; i < 10; i++){
		
	}
}

function fifteenQuestions(){
	initQuestions();

	for(var i = 0; i < 15; i++){
		
	}
}

function initQuestions(){
	document.getElementById("des").style.display = "none";
	document.getElementById("five").style.display = "none";
	document.getElementById("ten").style.display = "none";
	document.getElementById("fifteen").style.display = "none";

	question = document.getElementById("curr_question");

	answers = document.getElementsByClassName("answer");

	question.style.display = "block";

	answers[0].style.display = "inline";
	answers[1].style.display = "inline";
	answers[2].style.display = "inline";
	answers[3].style.display = "inline";
}