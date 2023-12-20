player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

question_turn = "player1"
answer_turn = "player2"

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = question_turn;
document.getElementById("player_answer").innerHTML = answer_turn;

console.log(question_turn + "&" + answer_turn)


function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "×" + number2 + "</h4>";
    input_box = "<br> <h5> Answer: </h5><input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

function check(){
    console.log("checking");
    answer = document.getElementById("input_check_box").value;
    console.log("Question turn: " + question_turn + "Answer turn: " + answer_turn)
    console.log("Answer:" + answer + "Actual Answer:" + actual_answer)
    if(answer == actual_answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            answer_turn = "player2";
            question_turn = "player1";
            console.log("Player1 wins!")
        }
        else{
            player2_score = player2_score + 1;
            answer_turn = "player1";
            question_turn = "player2";
            console.log("Player2 wins!")
        }
    }
    else{
        if(answer_turn == "player1"){
            player2_score = player2_score + 1;
            answer_turn = "player2";
            question_turn = "player1";
            console.log("Player2 wins!")
        }
        else{
            player1_score = player1_score + 1;
            answer_turn = "player1";
            question_turn = "player2";
            console.log("Player1 wins!")
        }
    }

    document.getElementById("output").innerHTML = "";
    console.log("Question turn: " + question_turn + "Answer turn: " + answer_turn)
    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = question_turn;
    document.getElementById("player_answer").innerHTML = answer_turn;
}