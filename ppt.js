let userScore = 0;
let computerScore = 0; 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
/* utiliza el número que devuelve randomNumber (entre 0 y 2) para acceder al índice del array y que devuelva la letra r(0), p(1), s(2)*/
    return choices[randomNumber]
}
function convertToWord(letter) {
 if (letter === "r") return "Piedra";
 if (letter === "p") return "Papel";
 return "Tijera";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " gana a " + convertToWord(computerChoice) + ". Tú ganas."
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " pierde contra " + convertToWord(computerChoice) + ". Máquina gana."
}
function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " empata contra " + convertToWord(computerChoice) + ". Empate."
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }  
}


function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();
