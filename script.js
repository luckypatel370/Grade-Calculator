function calculateGrade() {
    var score = document.getElementById("score").value;
    var gradingTotal = document.getElementById("gradingTotal").value;
    var grade;

    if (gradingTotal == 200) {
        if (score >= 160 && score <= 200) {
            grade = "A";
        } else if (score >= 130 && score <= 159) {
            grade = "B";
        } else if (score >= 100 && score <= 129) {
            grade = "C";
        } else if (score >= 70 && score <= 99) {
            grade = "D";
        } else {
            grade = "E";
        }
    } else if (gradingTotal == 400) {
        if (score >= 320 && score <= 400) {
            grade = "A";
        } else if (score >= 260 && score <= 319) {
            grade = "B";
        } else if (score >= 200 && score <= 259) {
            grade = "C";
        } else if (score >= 140 && score <= 199) {
            grade = "D";
        } else {
            grade = "E";
        }
    } else if (gradingTotal == 1800) {
        if (score >= 1440 && score <= 1800) {
            grade = "A";
        } else if (score >= 1170 && score <= 1439) {
            grade = "B";
        } else if (score >= 900 && score <= 1169) {
            grade = "C";
        } else if (score >= 630 && score <= 899) {
            grade = "D";
        } else {
            grade = "E";
        }
    }

    document.getElementById("result").innerHTML = "Your grade is: " + grade;
}

function clearScore() {
    document.getElementById("score").value = "";
    document.getElementById("result").innerHTML = "";
}