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
        // $("#questions").html("<p>What is Pink City</p>");
        $("#quesBtn").removeClass('d-none');
        $("#quesBtn").html("<button type= 'button' class='list-group-item list-group-item-action active' id='quesBtn'>"+
        "Which city is known as Pink City"+
      "</button>");
      $("#ans1").removeClass('d-none');
      $("#ans1").html("<button type='button' class='list-group-item list-group-item-action d-none' id='ans1'>"+
      "Jaipur"+
      "</button>");
      $("#ans2").removeClass('d-none');
      $("#ans2").html("<button type='button' class='list-group-item list-group-item-action d-none' id='ans2'>"+
      "Kashmir"+
      "</button>");
      $("#ans3").removeClass('d-none');
      $("#ans3").html("<button type='button' class='list-group-item list-group-item-action d-none' id='ans3'>"+
      "Chennai"+
      "</button>");
      $("#ans4").removeClass('d-none');
      $("#ans4").html("<button type='button' class='list-group-item list-group-item-action d-none' id='ans4'>"+
      "Mumbai"+
      "</button>");


        console.log("question1");
    }

    

});