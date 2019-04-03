class Rochambeau {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.scoreboard = new Scoreboard();
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
