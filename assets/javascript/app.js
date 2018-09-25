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
    alert("hello");
$("#start").hide();
var Questiondiv = $("<div>");
Questiondiv.addClass("Quesdiv");
var Title = $("<h1>");
Questiondiv.prepend(Title);
Title.addClass("Title");
});