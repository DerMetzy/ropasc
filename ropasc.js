const picks = ["sasso", "carta", "forbici"];
let playerWin = 0;
let computerWin = 0;
let playerPick;
let computerPick;

function askUser () {
    do {
        // playerPick = prompt("Sasso, carta o forbici?").toLowerCase(); 
        const random = Math.floor(Math.random() * picks.length);
        computerPick = (random, picks[random]);
        console.log("Il computer ha scelto: " + computerPick + ".");
        if (picks.includes(playerPick)) {
            console.log("Hai scelto: "  + playerPick + ".");
        } else {
            alert("seleziona un oggetto tra quelli proposti")
        }
    } while (!(picks.includes(playerPick)));
}
function trackScore() {
    console.log ("Hai vinto " + playerWin + " volte");
    console.log ("Il computer ha vinto " + computerWin + " volte");
    switch (true) {
        case (playerWin > computerWin):
            console.log("Stai vincendo " + playerWin + " a " + computerWin + ". Continua così!");
            document.getElementById("score").innerText = "Score: Stai vincendo " + playerWin + " a " + computerWin + ". Continua così!";
            break;
        case (playerWin < computerWin):
            console.log("Stai perdendo " + playerWin + " a " + computerWin + ". Non mollare proprio ora!");
            document.getElementById("score").innerText = "Score: Stai perdendo " + playerWin + " a " + computerWin + ". Non mollare proprio ora!";
            break;
        default:
            console.log("Testa a testa, è il momento di lottare!");
            document.getElementById("score").innerText = "Score: Testa a testa, è il momento di lottare!";
    }
}

function playRound () {
        let winner;
        computer();
        if (playerPick == undefined) {
            document.getElementById("score").innerText = "Così non va...Sicuro di aver scelto bene?";
            document.getElementById("action").innerText = "Prima devi scegliere uno tra i tre oggetti!";
            document.getElementById("round").innerText = "Nuovo round";
            return;
        }
        //askUser();
        switch (true) {
            case (playerPick === "sasso" && computerPick === "forbici"):
                console.log ("Sasso batte forbici. Hai vinto!");
                playerWin++;
                winner = "Sasso batte forbici. Hai vinto!";
                break;
            case (playerPick === "forbici" && computerPick === "carta"):
                console.log ("Forbici batte carta. Hai vinto!");
                playerWin++;
                winner = "Forbici batte carta. Hai vinto!";
                break;
            case (playerPick === "carta" && computerPick === "sasso"):
                console.log ("Carta batte sasso. Hai vinto!");
                playerWin++;
                winner = "Carta batte sasso. Hai vinto!";
                break;
            case (playerPick === computerPick):
                console.log ("Pareggio!");
                winner = "Pareggio!";
                break;
            default:
                console.log ("Hai perso. Riprova, ce la puoi fare!");
                computerWin++;
                winner = "Hai perso. Riprova, ce la puoi fare!";
        }
        document.getElementById("action").innerText = `Hai scelto: ` + playerPick + `\n` +
                                                      `Il computer ha scelto: ` + computerPick +
                                                      `\n` + winner;
        document.getElementById("round").innerText = "Gioca un altro round";
        trackScore();
};

function playGame () {
    console.clear();
    for (let i = 0; i < 5; i++) {
        alert("Round " + (i+1))
        playRound ();
     }
     switch (true) {
     case (computerWin > playerWin):
        console.log("Il computer ha vinto con " + computerWin + " punti. Tu ne hai fatti solo " + playerWin + ". Andrà meglio la prossima volta!");
        break;
     case (playerWin > computerWin) :
        console.log("Congratulazioni! Hai vinto con " + playerWin + " punti. Il computer ha vinto solo " + computerWin + " volte.")
        break;
    default :
        console.log("Pareggio??? Chi l'avrebbe mai detto!");
    }
}

// Refactoring del codice per passare da un gioco basato su console a uno basato sui bottoni

//Listenere dei bottoni che servono come utility "utilityButton"

/** const scoreButton = document.getElementById("buttonScore");
scoreButton.addEventListener("click", (e) => {
    trackScore();
}); */

const roundButton = document.getElementById("round");
roundButton.addEventListener("click", (e) => {
    playRound();
    declareWinner();
});


function computer() {
    const random = Math.floor(Math.random() * picks.length);
    computerPick = (random, picks[random]);
    console.log("Il computer ha scelto: " + computerPick + "."); 
}

// Listener dei bottoni che servono per giocare "pickButton"
const pickButton = document.getElementById("game");
pickButton.addEventListener("click", (e) => {
    if(e.target.classList.contains("play")) {
        playerPick = e.target.id;
        console.log("Hai scelto: " + playerPick);
        document.getElementById("action").innerText = "Hai scelto: " + playerPick;
    }
});

function declareWinner () {
    if (playerWin == 5) {
        document.getElementById("score").innerText = "Hai vinto il match, congratulazioni!"
        playerWin = 0;
        computerWin = 0;
        document.getElementById("round").innerText = "Vuoi difendere il tuo titolo di campione?";
    };
    if (computerWin == 5) {
        document.getElementById("score").innerText = "Ha vinto il computer, andrà meglio la prossima volta..."
        playerWin = 0;
        computerWin = 0;
        document.getElementById("round").innerText = "Questa volta andrà meglio!";
    };
};



