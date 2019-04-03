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
        if(this.player.choice !=== this.computer.choice) {
            if(this.player.choice === 1) {
                if(this.computer.choice === 3) {
                    msg = "Win";
                } else {
                    msg = "Lose"
                }
            } else if(this.player.choice === 2) {
                if(this.player.choice > this.computer.choice) {
                    msg = "Win"
                } else {
                    msg = "Lose"
                }
            } else {
                msg = "Win"
            }
        } else {
            msg = "Tie";
        }
        return msg;
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
