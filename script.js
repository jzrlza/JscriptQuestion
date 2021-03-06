var json = null;
var answered = false;
var score = 0;
var current = 0;
var index = 0;
var correct = 0;
var incorrect = 0;
var time = 0;
var bonus = 0;
var avg_time = [];

$.getJSON('qa.json', function(data) {
        
           json = data;
    });

function fiveQuestions(){
	initQuestions();

	runQuestions(5);
}

function tenQuestions(){
	initQuestions();

	runQuestions(10);
}

function fifteenQuestions(){
	initQuestions();

	runQuestions(15);
}

function runQuestions(n){

	//randomize number from 0 to 'json.questions.length'
	//no duplicate number
	//'json.questions.length' numbers
	//keep it in set
	var indices = [];

	for(var i = 0; i < json.questions.length; i++){ //Initate indices by number of questions
		indices[i] = i;
	}

	indices = shuffle(indices);

	current = indices[0];
	newQuestion(current);

	for(var i = 0; i <= n; i++){
		avg_time[i] = 0;
	}

	//get questions and answers
	startTimer(60*2, document.querySelector('#timer'), n, indices);

	//then wait for user to click any answer

	
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function newQuestion(i){

	question = document.getElementById("curr_question");

	answers = document.getElementsByClassName("answer");

	question.innerHTML = "<img src='"+json.questions[i].image+"' alt='Monster!!'> <br><br>"+(index+1)+") "+json.questions[i].question;

	answers[0].innerHTML = json.questions[i].choices[0].name;
	answers[1].innerHTML = json.questions[i].choices[1].name;
	answers[2].innerHTML = json.questions[i].choices[2].name;
	answers[3].innerHTML = json.questions[i].choices[3].name;
}

function startTimer(duration, display, n, indices) {
    var timer = duration, minutes, seconds;
    index = 1;
    var interval = setInterval(function () {
    	bonus = 0;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time remaining : "+minutes + ":" + seconds;
	
        bonus = parseInt(minutes*6+seconds);

		time++;
		avg_time[index]++;
		
		

        if (--timer < 0 || answered) {
		timer = duration;
		
		if( index >= n ){
			index = 1;
			displayScores();
			clearInterval(interval);
		}else {
  		
	    current = indices[index];
	    newQuestion(current);
	    index++;
	    answered = false;
	    
	    }
        }
    }, 1000);
}

function initQuestions(){
	document.getElementById("des").style.display = "none";
	document.getElementById("five").style.display = "none";
	document.getElementById("ten").style.display = "none";
	document.getElementById("fifteen").style.display = "none";

	question = document.getElementById("curr_question");

	timer = document.getElementById("timer");

	answers = document.getElementsByClassName("answer");

	question.style.display = "block";
	timer.style.display = "block";

	answers[0].style.display = "inline";
	answers[1].style.display = "inline";
	answers[2].style.display = "inline";
	answers[3].style.display = "inline";
}

function displayScores(){
	question = document.getElementById("curr_question");

	timer = document.getElementById("timer");

	answers = document.getElementsByClassName("answer");

	question.style.display = "none";
	timer.style.display = "none";

	answers[0].style.display = "none";
	answers[1].style.display = "none";
	answers[2].style.display = "none";
	answers[3].style.display = "none";

	scoreText = document.getElementById("score")
	scoreText.style.display = "block";
	document.getElementById("reset").style.display = "inline";

	scoreText.innerHTML = "Score : "+score+"<br><br> Correct : "+correct+"<br><br> Incorrect : "+incorrect+"<br><br> Total Time : "+time+" s";

	for(var i = 1; i < avg_time.length; i++){
		scoreText.innerHTML += "<br><br> Question No."+i+" Time Spent : "+avg_time[i]+" s";
	}

	score = 0;
	index = 0;
	answered = false;
	correct = 0;
	incorrect = 0;
	time = 0;
	bonus = 0;
	

}

function reset(){

	document.getElementById("score").style.display = "none";
	document.getElementById("reset").style.display = "none";

	document.getElementById("des").style.display = "block";
	document.getElementById("five").style.display = "inline";
	document.getElementById("ten").style.display = "inline";
	document.getElementById("fifteen").style.display = "inline";
}

function ans1(){
	if (json.questions[current].correct_ans == 1 && !answered){		
		correct++;
		score += parseInt(1+bonus);
	} else if (json.questions[current].correct_ans != 1 && !answered){
		incorrect++;
	}
	answered = true;
}

function ans2(){
	if (json.questions[current].correct_ans == 2 && !answered){		
		correct++;
		score += parseInt(1+bonus);
	} else if (json.questions[current].correct_ans != 2 && !answered){
		incorrect++;
	}
	answered = true;
}

function ans3(){
	if (json.questions[current].correct_ans == 3 && !answered){		
		correct++;
		score += parseInt(1+bonus);
	} else if (json.questions[current].correct_ans != 3 && !answered){
		incorrect++;
	}
	answered = true;
}

function ans4(){
	if (json.questions[current].correct_ans == 4 && !answered){		
		correct++;
		score += parseInt(1+bonus);
	} else if (json.questions[current].correct_ans != 4 && !answered){
		incorrect++;
	}
	answered = true;
}

