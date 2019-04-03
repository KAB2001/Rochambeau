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
        return "";
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
