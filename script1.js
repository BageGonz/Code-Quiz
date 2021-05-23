var questions = [
    {
        title: "When was William Shakespeare born?",
        choice: ["23 April 1564", "23 May 1564", "10 October 1990", "18 April 1564" ],
        answer: "23 April 1564"

    },

    {
        title: "Who was Henry VIll's first wife?",
        choice: ["Katherine Parr", "Jane Seymour", "Catherine of Aragon", "Catherine Howard"],
        answer: "Catherine of Aragon"

    },

    {
        title: "When did the Cold War end?",
        choice: ["1990", "1991", "1891", "1999"],
        answer: "1991"

    },

    {
        title: "Who was the architect who designed London's Millennium Dome? ",
        choice: ["Richard Rogers", "Ian Liddell", "Jonathan Meades ", "Mike Davies"],
        answer: "Richard Rogers"

    },

]

var currentQuestion = 0;
var time = questions.length * 15;

var startBtn = document.querySelector("#start");
var questionElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");

var timerID;

var currentQuestionIndex = 0;
var feedBackElement = document.querySelector("#feedback");

function startQuiz() {
    var startScreen = document.querySelector("#start-screen")
    startScreen.setAttribute("class", "hide");
    questionElement.removeAttribute("class");
    timerID = setInterval(clockTime, 1000)
    timerElement.textContent = time;
    getCurrentQuestion();
}

function clockTime() {
    time--;
    timerElement.textContent = time;
    if (time < 0){
        //quizEnd();
    }
}

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    var titleElement = document.querySelector("#questions-title")
    titleElement.textContent = currentQuestion.title;
    var choicesElement = document.querySelector("#choices");
    choicesElement.innerHTML= "";
    console.log(currentQuestion);

    currentQuestion.choice.forEach( function(choice, i) {
        
        var userChoice = document.createElement("button");
        userChoice.setAttribute("class", "choices");
        userChoice.setAttribute("value", choice)
        userChoice.textContent= i + 1 + ". " + choice;
        userChoice.onclick = questionClick;
        choicesElement.appendChild(userChoice);
    });
    
        
    

}

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer){
        time -= 10;
        if (time < 0){
            time = 0;
        }
        timerElement.textContent= time;
        feedBackElement.textContent = "Wrong";
    } else {
        feedBackElement.textContent = "Correct"
    }
   // set an attribute to the HTML
    feedBackElement.setAttribute("class", "feedback");
    setTimeout( function() {
        // set attribute to return back hide.
        feedBackElement.setAttribute("class", "feedback hide");
    }, 1000)
// adding number to show how long it will stay.

    currentQuestionIndex++;

    if (currentQuestionIndex == questions.length){
        quizEnd(); 
    } else {
        getCurrentQuestion();
    }
}
startBtn.onclick = startQuiz;