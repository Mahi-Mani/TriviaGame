// Variables declarations
var intervalId;
var timeRemaining;
var questions;
var quesBank = ["Which city is known as Pink City"];
var ansBank = ["Jaipur"];
var value;

$(document).ready(function(){
    // Game is started when Start button is pressed
    $("#startBtn").on("click",function(){
        $("#startBtn").show();
        startGame();
    });

    function startGame(){
        $("#startBtn").hide();
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
            timeUp(timeRemaining);

        }

    }
    // Function that displays timeUP when remaining time expires!
    function timeUp(timeRemaining){
        $("#timeRemaining").html("<p>"+"Time Remaining : 0"+"</p>");
        $("#timeUp").append("<p>Time Up!</p>");
        clearInterval(intervalId);
        askQuestionsHide();
    }

    // Function that displays questions to user
    function askQuestions(){
        // $("#questions").html("<p>What is Pink City</p>");
        $("#quesBtn").show();
        $("#ans1").show();
        $("#ans2").show();
        $("#ans3").show();
        $("#ans4").show();
        $("#quesBtn").removeClass('d-none');
        $("#quesBtn").html("<button type= 'button' class='list-group-item list-group-item-action active' id='quesBtn'>"+
        "Which city is known as Pink City"+
      "</button>");
      $("#ans1").removeClass('d-none');
      $("#ans1").html("<button type='button' class='btn btn-secondary'id='ans1'value='Jaipur'>"+"Jaipur"+"</button>");
      $("#ans2").removeClass('d-none');
      $("#ans2").html("<button type='button' class='btn btn-secondary'id='ans2'>"+"Kashmir"+"</button>");
      $("#ans3").removeClass('d-none');
      $("#ans3").html("<button type='button' class='btn btn-secondary'id='ans3'>"+"Chennai"+"</button>");
      $("#ans4").removeClass('d-none');
      $("#ans4").html("<button type='button' class='btn btn-secondary'id='ans4'>"+"Mumbai"+"</button>");

      $("#ans1").on("click",function(){
          var answer1 = $(this).val();
        //   console.log($("#ans1").text(value));
        console.log(answer1);
        evaluate(answer1);

      });

      $("#ans2").on("click",function(){
        var answer2 = $(this).val();
      //   console.log($("#ans1").text(value));
      console.log(answer2);
      evaluate(answer2);

    });

    $("#ans3").on("click",function(){
        var answer3 = $(this).val();
      //   console.log($("#ans1").text(value));
      console.log(answer3);
      evaluate(answer3);

    });

    $("#ans4").on("click",function(){
        var answer4 = $(this).val();
      //   console.log($("#ans1").text(value));
      console.log(answer4);
      evaluate(answer4);

    });
        
    }
    // Function that evaluates user's answer
    function evaluate(answer){
        if(answer == ansBank[0]){
            $("#answer").html("<p>Yay! Correct answer</p>");
            askQuestionsHide();
            stopTimer();
        }
        if(answer != ansBank[0]){
            $("#answer").html("<p>Oops! Wrong answer</p>");
            $("#answer").append("<p>Correct answer is " +ansBank[0]+"</p>");
            askQuestionsHide();
            stopTimer();
        }

    }

    // Code that hides questions when time is up and answer is evaluated!
    function askQuestionsHide(){
        $("#quesBtn").hide();
        $("#ans1").hide();
        $("#ans2").hide();
        $("#ans3").hide();
        $("#ans4").hide();
    }
    // Function to stop timer
    function stopTimer(){
    clearInterval(intervalId);
    }

    

});