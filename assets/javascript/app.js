// Variables declarations
var intervalId;
var timeRemaining;
var questions;
var quesBank = ["Which city is known as Pink City","Which country is called as The Land of rising Sun","The Land of midnight Sun"];
var ansBank = ["Jaipur","Japan","Norway"];
var options = [["Jaipur","Kashmir","Chennai","Mumbai"],
                ["Norway","Japan","India","Australia"],
                ["Indonesia","Canada","Norway","Russia"]];
var value;
var i;
var j;
var score;
var correctAnswers;
var wrongAnswers;
var unanswered;

$(document).ready(function(){
    // Game is started when Start button is pressed
    $("#startBtn").on("click",function(){
        $("#startBtn").show();
        startGame();
    });

    function initializeVariables(){
        i=0;
        j=0;
        score = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        hideVariables();
    }

    function hideVariables(){
        $("#score").hide();
        $("#corrAns").hide();
        $("#wrongAns").hide();
        $("#gameOverBoot").addClass('d-none');
        $("#gameOver").hide();
        $("#restart").hide();
        $("#restartBtn").hide();
        $("#unAns").hide();
    }

    function showVariables(){
        $("#score").removeClass('d-none');
        $("#score").show();
        $("#corrAns").removeClass('d-none');
        $("#corrAns").show();
        $("#wrongAns").removeClass('d-none');
        $("#wrongAns").show();
        $("#gameOverBoot").removeClass('d-none');
        $("#gameOver").show();
        $("#restart").show();
        $("#restartBtn").show();
        $("#unAns").removeClass('d-none');
        $("#unAns").show();
    }

    function startGame(){
        initializeVariables();
        hideVariables();
        $("#startBtn").hide();
        $("#getSetGo").hide();
        $("#timedGame").hide();
        $("#cardBody1").hide();
        $("#cardBody2").hide();
        setTimeout(askQuestions,1000);
        run();
    }
    // Calls Decrement function
    function run() { 
        clearInterval(intervalId); 
        timeRemaining = 10;
        intervalId = setInterval(decrement, 1000);
    }
    // Displays the remaining time
    function decrement(){
        timeRemaining = timeRemaining - 1;
        $("#timeRemaining").removeClass('d-none');
        $("#timeRemaining").html("<p>"+"Time Remaining : "+timeRemaining+"</p>");
        if(timeRemaining == 0){
            timeUp(timeRemaining);

        }

    }
    // Function that displays timeUP when remaining time expires!
    function timeUp(timeRemaining){
        $("#timeRemaining").removeClass('d-none');
        $("#timeRemaining").show();
        $("#timeUp").removeClass('d-none');
        $("#timeUp").show();
        $("#timeRemaining").html("<p>"+"Time Remaining : 0"+"</p>");
        $("#timeUp").html("<p>Time Up!</p>");
        unanswered = unanswered + 1;
        console.log("Inside Time UP!");
        showCorrectAnswer();
        i++;
        ifAllQuestionsAsked();
        clearInterval(intervalId);
        askQuestionsHide();
    }
    // Function to hide time remaining and timeUp variables
    function allHide(){
        $("#timeRemaining").hide();
        $("#timeUp").hide();
        $("#answer").hide();
        // $("#gameOverBoot").addClass('d-none');
    }

    // Function that displays questions to user
    function askQuestions(){
        $("#answer").empty();
        $("#timeUp").hide();
        $("#answer").hide();
        $("#quesBtn").show();
        $("#ans1").show();
        $("#ans2").show();
        $("#ans3").show();
        $("#ans4").show();
        $("#quesBtn").removeClass('d-none');
        $("#quesBtn").html("<button type= 'button' class='list-group-item list-group-item-action active' id='quesBtn'>"+
        quesBank[i]+"</button>");
      $("#ans1").removeClass('d-none');
      $("#ans1").html("<button type='button' class='btn btn-secondary'id='ans1'value='" + options[i][0] + "'>"+options[i][0]+"</button>");
      $("#ans2").removeClass('d-none');
      $("#ans2").html("<button type='button' class='btn btn-secondary'id='ans2'value='" + options[i][1] + "'>"+options[i][1]+"</button>");
      $("#ans3").removeClass('d-none');
      $("#ans3").html("<button type='button' class='btn btn-secondary'id='ans3'value='" + options[i][2] + "'>"+options[i][2]+"</button>");
      $("#ans4").removeClass('d-none');
      $("#ans4").html("<button type='button' class='btn btn-secondary'id='ans4'value='" + options[i][3] + "'>"+options[i][3]+"</button>");

      $("#ans1").unbind("click").on("click", "button[id=ans1]",function (){
        // $("#ans1").unbind('click'); //Resets button
          var answer1 = $(this).val();
        //   console.log($("#ans1").text(value));
        console.log(answer1);
        evaluate(answer1);

      });

      $("#ans2").unbind("click").on("click", "button[id=ans2]",function (){
        // $("#ans2").unbind('click'); //Resets button
        var answer2 = $(this).val();
      //   console.log($("#ans1").text(value));
      console.log(answer2);
      evaluate(answer2);

    });

    // $("#ans3").on("click","button[id=ans3]",function()
    // $('#ans3').unbind('click').click(function()
    $("#ans3").unbind("click").on("click", "button[id=ans3]",function ()
    {
        // $("#ans3").unbind('click'); //Resets button
        var answer3 = $(this).val();
      //   console.log($("#ans1").text(value));
      console.log(answer3);
    //   $("#ans3").unbind('click'); //Resets button
      evaluate(answer3);

    });

    $("#ans4").unbind("click").on("click", "button[id=ans4]",function (){
        // $("#ans4").unbind('click'); //Resets button
        var answer4 = $(this).val();
      //   console.log($("#ans1").text(value));
      console.log(answer4);
    //   $("#ans4").unbind('click'); //Resets button
      evaluate(answer4);

    });
        
    
}
    // Function that evaluates user's answer
    function evaluate(answer){
        $("#answer").removeClass('d-none');
        $("#answer").show();
        if(answer == ansBank[i]){
            console.log("Answer inside equal if loop : "+answer);
            console.log("Inside equal if loop: "+ansBank[i]+"value of i is : "+i);
            // $(answer).addClass("active");
            $("#answer").html("<p>Yay! Correct answer</p>");
            console.log("inside equal if loop: "+answer);
            askQuestionsHide();
            stopTimer();
            // scoreCard();
            score = score + 1;
            correctAnswers++;
            i++;
            //Breaks the loop if all questions in array were asked
            ifAllQuestionsAsked();
        }
        else if(answer != ansBank[i]){
            $("#answer").html("<p>Oops! Wrong answer</p>");
            console.log("Prints i inside second if "+i);
            // $("#answer").append("<p>Correct answer is " +ansBank[i]+"</p>");
            showCorrectAnswer();
            // $("#answer").empty();
            // console.log("Prints i inside second if "+i);
            askQuestionsHide();
            stopTimer();
            // calcWrongAnswers();
            wrongAnswers = wrongAnswers + 1;
            i++;
            //Breaks the loop if all questions in array were asked
            ifAllQuestionsAsked();
        }
        else{
            // i++;
            }
    }
    function ifAllQuestionsAsked(){ 
        if((i+1) <= quesBank.length)
        {
        setTimeout(askQuestions,5000);
        setTimeout(run,5000);
        // evaluateLastQuestion();
        }

        else{
            console.log("Game over");
            // gameOver();
            setTimeout(gameOver,5000);
        }
    }
    // Function that shows correct answer when answered incorrectly
    function showCorrectAnswer(){
        $("#answer").removeClass('d-none');
        $("#answer").show();
        console.log("Show correct answer"+ansBank[i]);
        $("#answer").append("<p>Correct answer is " +ansBank[i]+"</p>");
        
    }
    // Function that calculates score
    function scoreCard(){
        showVariables();
        $("#score").html("Your total score is : "+score);
        $("#corrAns").html("Number of correct answers : "+correctAnswers);

 }
 //Function that keeps track of wrong answers
 function calcWrongAnswers(){
     showVariables();
     $("#wrongAns").html("Number of wrong answers : "+wrongAnswers);

 }
 
 function calcUnanswered(){
     showVariables();
     $("#unAns").html("Number of questions unanswered : "+unanswered);
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
    // Function to show score card stuffs to user
    function gameOver(){
        $("#gameOverBoot").removeClass('d-none');
        $("#gameOver").html("Game Over !");
        scoreCard();
        calcWrongAnswers();
        calcUnanswered();
        allHide();
        restartGame();
    }
    // Function to show button that allows user to restart the game
    function restartGame(){
        $("#restart").removeClass('d-none');
        $("#restartBtn").removeClass('d-none');
        $("#restart").html("Restart");
        $("#restart").on("click",function(){
        $("#timeRemaining").removeClass('d-none');
        $("#timeRemaining").show();
        startGame();
        });

    }

    

});