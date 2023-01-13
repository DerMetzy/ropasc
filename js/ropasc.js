const picks = ["sasso", "carta", "forbici"];
let playerWin = 0;
let computerWin = 0;
let playerPick;
let computerPick;

function askUser () {
    do {
        playerPick = prompt("Sasso, carta o forbici?").toLowerCase(); 
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
function test() {
    console.log ("Hai vinto " + playerWin + " volte");
    console.log ("Il computer ha vinto " + computerWin + " volte");
    switch (true) {
        case (playerWin > computerWin):
            console.log("Stai vincendo " + playerWin + " a " + computerWin + ". Continua così!");
            break;
        case (playerWin < computerWin):
            console.log("Stai perdendo " + playerWin + " a " + computerWin + ". Non mollare proprio ora!");
            break;
        default:
            console.log("Testa a testa, è il momento di lottare!");
    }
}
function playRound () {
        
        askUser();
        switch (true) {
            case (playerPick === "sasso" && computerPick === "forbici"):
                console.log ("Sasso batte forbici. Hai vinto!");
                alert("Il computer ha scelto: " + computerPick);
                alert("Sasso batte forbici. Hai vinto!");
                playerWin++;
                break;
            case (playerPick === "forbici" && computerPick === "carta"):
                console.log ("Forbici batte carta. Hai vinto!");
                alert("Il computer ha scelto: " + computerPick);
                alert("Forbici batte carta. Hai vinto!");
                playerWin++;
                break;
            case (playerPick === "carta" && computerPick === "sasso"):
                console.log ("Carta batte sasso. Hai vinto!");
                alert("Il computer ha scelto: " + computerPick);
                alert("Carta batte sasso. Hai vinto!");
                playerWin++;
                break;
            case (playerPick === computerPick):
                console.log ("Pareggio!");
                alert("Il computer ha scelto: " + computerPick);
                alert("Pareggio!");
                break;
            default:
                console.log ("Hai perso. Riprova, ce la puoi fare!");
                alert("Il computer ha scelto: " + computerPick);
                alert("Hai perso. Riprova, ce la puoi fare!");
                computerWin++;
        }
}

function game () {
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

  
    
    