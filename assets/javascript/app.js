var myQuestions = [
    {
    question: "How many chambers are there in the heart?", 
    answers: [
        "1",
        "2",
        "3",
        "4"],
    correctAnswer: "4",
    value: "4",
},{
    question: "How many bones are in the human body?",
    answers: [
        "108",
        "206",
        "127",
        "94"],
        correctAnswer: "206",
        value: "2",
       
},{
    question: "If you were to stretch out your entire digestive system, how long would it be?",
    answers: [
         "15 feet",
         "4 feet",
         "10 feet",
         "30 feet"],
        correctAnswer: "30 feet",
        value: "4",
},{
    question: "What is the most common blood type?",
    answers: [
        "O+",
        "AB+",
        "B+",
        "B-"],
        correctAnswer: "O+",
        value: "1",
},{
    question: "Where is the heart actually located?",
    answers: [
        "on the left side of the chest",
        "in the middle of the chest",
        "on the right side of the chest",
        "middle of the chest, slightly to the left"],
        correctAnswer: "middle of the chest, slightly to the left",
        value: "4",
},{
    question: "Where are your metatarsal bones located?",
    answers: [
        "Your spine",
        "Your feet",
        "Your skull",
        "Your hands"],
        correctAnswer: "Your feet",
        value: "2",
},{
    question: "What is the longest bone in the human body?",
    answers: [
        "Radius",
        "Femur",
        "Humerus",
        "Fibula"],
        correctAnswer: "Femur",
        value: "2",
},{
    question: "What tissue is the nose primarily made of?",
    answers: [
        "cartilage",
        "tendon",
        "glucose",
        "bone"],
    correctAnswer: "cartilage",
    value: "1",
}]


$("#start").on("click", function() {
    timer = setInterval(countdown, 1000);
    $("#wrapper2").prepend('<h2>Time Remaining: <span id="count">120</span> Seconds</h2>');
    console.log("Clicked");
    $("#start").remove();
    for(var i=0; i< myQuestions.length; i++) {
        $("#wrapper2").append('<h2>'+ myQuestions[i].question + '</h2>');
            for(var j=0; j< myQuestions[j].answers.length; j++) {
                $("#wrapper2").append("<input type='radio' name='question"+i+"' value='"+myQuestions[i].answers[j]+"'>"+myQuestions[i].answers[j]);
            }
        }
        $("#wrapper2").append('<br><br><button id="Done">Done</button>');
});

$(document).on('click', '#Done', function() {
    gameOver();
});

var right = 0;
var wrong = 0;
var counter = 20;
var timer;

function countdown() {
    counter--
    $("#count").html(counter);
    if (counter <= 0) {
        console.log("Time's up");
        clearInterval(timer);
        gameOver();
    }
}

function start() {
    timer = setInterval(countdown, 1000);
    $("#wrapper2").prepend('<h2>Time Remaining: <span id="count">120</span> Seconds</h2>');
    
    $("#start").remove();
for(var i=0; i< myQuestions.length; i++) {
    $("#wrapper2").append('<h2 id="ques">'+ myQuestions[i].question + '</h2>');
        for(var j=0; j< myQuestions[j].answers.length; j++) {
            $("#wrapper2").append("<input type='radio' name='question"+i+"' value='"+myQuestions[i].answers[j]+"'>"+myQuestions[i].answers[j]);
        }
    }
    $("#wrapper2").append('<br><br><button id="Done"><span>Done</span></button>');
    
}

function gameOver() {
  
    
    var useranswer = $('input[type="radio"]:checked').val();
    
    $('input[name="question0"]:checked').each(function(){
    if($(this).val() === myQuestions[0].correctAnswer) {
        console.log(myQuestions[0].correctAnswer);
        right++; 
    }   else  {
        wrong++;  
    }
    });
    $('input[name="question1"]:checked').each(function(){
        if($(this).val() === myQuestions[1].correctAnswer) {
            console.log(myQuestions[1].correctAnswer);
            right++; 
        }   else  {
            wrong++;  
        }
        });
    $('input[name="question2"]:checked').each(function(){
    if($(this).val() === myQuestions[2].correctAnswer) {
        console.log(myQuestions[2].correctAnswer);
        right++; 
    }   else  {
        wrong++;  
    }
    });
    $('input[name="question3"]:checked').each(function(){
        if($(this).val() === myQuestions[3].correctAnswer) {
            console.log(myQuestions[3].correctAnswer);
            right++; 
        }   else  {
            wrong++;  
        }
        });
    $('input[name="question4"]:checked').each(function(){
            if($(this).val() === myQuestions[4].correctAnswer) {
                console.log(myQuestions[4].correctAnswer);
                right++; 
            }   else  {
                wrong++;  
            }
            });
    $('input[name="question5"]:checked').each(function(){
    if($(this).val() === myQuestions[5].correctAnswer) {
        console.log(myQuestions[5].correctAnswer);
        right++; 
    }   else  {
        wrong++;  
    }
    });
    $('input[name="question6"]:checked').each(function(){
        if($(this).val() === myQuestions[6].correctAnswer) {
            console.log(myQuestions[6].correctAnswer);
            right++; 
        }   else  {
            wrong++;  
        }
        });
    $('input[name="question7"]:checked').each(function(){
    if($(this).val() === myQuestions[7].correctAnswer) {
        console.log(myQuestions[7].correctAnswer);
        right++; 
    }   else  {
        wrong++;  
    }
    });

   
    showResults();
    
};

function showResults() {
    clearInterval(timer);
    $("#wrapper2 h2").remove();
    
    $("#wrapper2").html('<h2>All Done!</h2>');
    $("#wrapper2").append("<h3>Correct: " +right+ "</h3>");
    $("#wrapper2").append("<h3>Wrong: " +wrong+ "</h3>");
    var answered = right + wrong;
    var noaswer = myQuestions.length - answered;
    $("#wrapper2").append("<h3>Unanswered: " +noaswer+ "</h3>");
}