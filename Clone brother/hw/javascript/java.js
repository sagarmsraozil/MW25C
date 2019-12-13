var questions = ["What is your favourite food?", "Where do you want to live?", "If you got gennie, what will be your one wish?", "Do you watch animes?"];
var answers = ["Momo", "Peace area", "Make me a gennie", "Yes"];

var optionss = [
    ["Pizza", "Chicken Curry", "Burger", "Momo"],
    ["Peace area", "Civilized area", "Greenery area with crowd", "Crowded area"],
    ["Fly", "Invisible", "Invisible with superpower", "Make me a gennie"],
    ["No", "Never", "Yes", "Sometimes"]
];

var countQuestion = 0;
var userAnswers = new Array(questions.length);
var userChoice;
var valCount = 0;
var pointCounter = new Array(questions.length);
var correctness = 0;
var Overallpoints = 0;
var time = 50;

setInterval(


    function() {
        if (time > 0) {
            document.getElementById("time").innerHTML = "Time: " + time--;
            document.getElementById("d").style.display = "none";
        } else {

            document.getElementById("time").innerHTML = "Time: " + "Time Over";
            document.getElementById("d").style.display = "block";
            document.getElementById("a").style.display = "none";
            document.getElementById("b").style.display = "none";
            document.getElementById("c").style.display = "none";

        }
    }, 1000

);




function default_answers() {
    for (var l = 0; l < userAnswers.length; l++) {
        userAnswers[l] = "";
    }
}
default_answers();

function resultt() {
    userChoice = document.forms["users-ans"]["ans"].value;
    userAnswers[countQuestion] = userChoice;
    for (var l = 0; l < questions.length; l++) {
        if (userAnswers[l] == answers[l]) {
            pointCounter[l] = 10;
            correctness++;
        } else {
            pointCounter[l] = 0;
        }
    }

    for (var l = 0; l < pointCounter.length; l++) {
        Overallpoints = Overallpoints + pointCounter[l];
    }

    if (Overallpoints == 40) {
        document.getElementById("tag").innerHTML = "You won";
    } else if (Overallpoints == 30) {
        document.getElementById("tag").innerHTML = "Missed by a chance";
    } else if (Overallpoints < 30) {
        document.getElementById("tag").innerHTML = "Have you provided answer according to your own opinion??(Hats off to your 300 IQ)";

    }



    document.getElementById("correct").innerHTML = "Correct: " + correctness;
    document.getElementById("wrong").innerHTML = "Wrong: " + (questions.length - correctness);
    document.getElementById("pointScored").innerHTML = "Points: " + Overallpoints;
}


function result() {

    if (validation() == true) {
        for (var l = 0; l < questions.length; l++) {
            if (userAnswers[l] == answers[l]) {
                pointCounter[l] = 10;
                correctness++;
            } else {
                pointCounter[l] = 0;
            }
        }

        for (var l = 0; l < pointCounter.length; l++) {
            Overallpoints = Overallpoints + pointCounter[l];
        }

        if (Overallpoints == 40) {
            document.getElementById("tag").innerHTML = "You won";
        } else if (Overallpoints == 30) {
            document.getElementById("tag").innerHTML = "Missed by a chance";
        } else if (Overallpoints < 30) {
            document.getElementById("tag").innerHTML = "Have you provided answer according to your own opinion??(Hats off for your 300 IQ)";

        }



        document.getElementById("correct").innerHTML = "Correct: " + correctness;
        document.getElementById("wrong").innerHTML = "Wrong: " + (questions.length - correctness);
        document.getElementById("pointScored").innerHTML = "Points: " + Overallpoints;

    }
}


function validation() {


    userAnswers[countQuestion] = document.forms["users-ans"]["ans"].value;
    for (var l = 0; l < userAnswers.length; l++) {
        if (userAnswers[l] == "") {
            alert("Please provide answer for all questions!!");
            countQuestion = l;
            questionRoll(l);

            break;
        } else {
            valCount++;
        }
    }



    if (valCount == questions.length) {

        return true;
        valCount = 0;

    } else {
        valCount = 0;

    }


}

function prev_click() {

    userChoice = document.forms["users-ans"]["ans"].value;
    userAnswers[countQuestion] = userChoice;
    if (countQuestion > 0) {
        countQuestion--;
        questionRoll(countQuestion);
    }
}


function next_click() {
    userChoice = document.forms["users-ans"]["ans"].value;
    userAnswers[countQuestion] = userChoice;

    if (countQuestion < questions.length - 1) {
        countQuestion++;
        questionRoll(countQuestion);
    }
}


function questionRoll(i) {
    countQuestion = i;

    document.getElementById("questions").innerHTML = (i + 1) + "." + questions[countQuestion];

    do {
        for (var k = countQuestion; k <= countQuestion; k++) {
            for (var j = 0; j < optionss[k].length; j++) {
                document.getElementById("ans" + (j + 1)).value = optionss[k][j];
                document.getElementById("option" + (j + 1)).innerHTML = optionss[k][j];
                if (userAnswers[countQuestion] == document.getElementById("ans" + (j + 1)).value) {
                    document.getElementById("ans" + (j + 1)).checked = true;
                } else {
                    document.getElementById("ans" + (j + 1)).checked = false;
                }

            }
        }
    }

    while (countQuestion > 1000);



}

questionRoll(0);

function timeanddate() {
    var pp = new Date();

    var d = pp.getDay();


    document.getElementById("currenttime").innerHTML = "Day: " + dayy(d);
}

function dayy(x) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (var i = 0; i < days.length; i++) {
        if (x == i) {
            return days[x];
        }

    }
}
timeanddate();