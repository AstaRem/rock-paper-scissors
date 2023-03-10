// a game rock-paper-scissors
// might want to rewrite it after we learn about DOM


let choices = ["r", "p", "s"];

let wins = 0;
let losses = 0; 
let ties = 0;

for (let i = 0; i < 6; i++){
    userChoice = prompt("Please choose r, p or s:");
    let randIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randIndex];
    
    console.log(`User choice: ${userChoice} `);
    console.log(`Computer choice: ${computerChoice}`);


    // I write each win/loss in separate statement, because I want explicitly say why it is a win - "scissors cut paper"
    if(userChoice === computerChoice){ //tie
        alert("It's a tie!");
        ties++;
    } else if (userChoice == "s" && computerChoice == "r"){  //lost
        alert("You lost! Rock beats scissors");
        losses++;
    } else if (userChoice == "p" && computerChoice == "r"){ //win
        alert("You won! Paper covers rock");
        wins++;
    } else if (userChoice == "p" && computerChoice == "s"){ //lost
        alert("You lost! Scissors cut paper");
        losses++
    } else if (userChoice == "r" && computerChoice == "s"){ //win
        alert("You won! Rock beats scissors")
        wins++;
    } else if (userChoice == "r" && computerChoice == "p"){ // lost
        alert("You lost! Paper covers rock")
        losses++;
    } else if (userChoice == "s" && computerChoice == "p"){ //win
        alert("You won! Scissors cut paper")
        wins++
    }
}

console.log(`You had ${wins} win(s), ${losses} loss(es) and ${ties} tie(s). `)






                     

