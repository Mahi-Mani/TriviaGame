// Variables declarations
var intervalId;
var timeRemaining;
var questions;
$(document).ready(function(){
    // Game is started when Start button is pressed
    $("#startBtn").on("click",function(){
        startGame();
    });

    function startGame(){
        setTimeout(askQuestions,1000);
        run();
        // questions = setInterval(askQuestions, 10000);
        // run();
        
    }
    // Calls Decrement function
    function run() { 
        clearInterval(intervalId); 
        timeRemaining = 10;
        intervalId = setInterval(decrement, 1000);
        // questions = setInterval(askQuestions, 30000);
    }
    // Displays the remaining time
    function decrement(){
        timeRemaining = timeRemaining - 1;
        $("#timeRemaining").html("<p>"+"Time Remaining : "+timeRemaining+"</p>");
        if(timeRemaining == 0){
            $("#timeRemaining").html("<p>"+"Time Remaining : 0"+"</p>");
            $("#timeUp").append("<p>Time Up!</p>");
            clearInterval(intervalId);
        }

    }

    // Function that displays questions to user
    function askQuestions(){
        $("#questions").html("<p>What is Pink City</p>");
        console.log("question1");
    }

    

});