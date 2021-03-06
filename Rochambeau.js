rockButton = document.getElementById("rock");
rockButton.addEventListener("click", storePlayerChoice(1));

paperButton = document.getElementById("paper");
rockButton.addEventListener("click", storePlayerChoice(2));

scissorsButton = document.getElementById("scissors");
rockButton.addEventListener("click", storePlayerChoice(3));

playButton = document.getElementById("play");
playButton.addEventListener("click", determineOutcome());

class Rochambeau {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.scoreboard = new Scoreboard();
        this.ROCK = 1;
        this.PAPER = 2;
        this.SCISSORS = 3;
    }

    storePlayerChoice(choice) {
        this.player.choice = choice;
        this.storeComputerChoice();
    }

    storeComputerChoice() {
        this.computer.choice = Math.ceil(Math.random() * 3);
    }

    determineOutcome() {
        let msg = "";
        if(this.player.choice != this.computer.choice) {
            if(this.player.choice === 1) {
                if(this.computer.choice === 3) {
                    msg = "You Win";
                } else {
                    msg = "You Lose"
                }
            } else if(this.player.choice === 2) {
                if(this.player.choice > this.computer.choice) {
                    msg = "You Win"
                } else {
                    msg = "You Lose"
                }
            } else {
                msg = "You Win"
            }
        } else {
            msg = "Tie";
        }
        document.getElementById("result").textContent = msg;
    }

    updateScoreboard() {

    }

    displayScoreboard() {

    }

}

class Player {
    constructor() {
        this.choice = "";
    }
}

class Scoreboard {
    constructor() {

    }
}
