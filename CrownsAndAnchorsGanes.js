var Face = require("./Face");
var Bet = require("./Bet");
var Mat = require("./Mat");
var Die = require("./Die");

class CrownsAndAnchorsGame {
    constructor() {
        let spadesFace = new Face("Spades", 1, "https://images.app.goo.gl/sdSikLMPNcHuiHfH7")
        let heartsFace = new Face("Heart", 1, "https://images.app.goo.gl/fVA4iHbhkunNnf699")
        let diamondsFace = new Face("Diamond", 1, "https://images.app.goo.gl/uTZ7SREahz8AgdAB8")
        let cloverFace = new Face("Clover", 1, "https://images.app.goo.gl/qA6r5kpQqCDPECHt9")
        let crownFace = new Face("Crown", 1, "https://images.app.goo.gl/KSYTDkzYbmXvooia6")
        let anchorFace = new Face("Anchor", 1, "https://images.app.goo.gl/wLBhUXmi7YQyVBNp7")

        let faces = [spadesFace, heartsFace, diamondsFace, cloverFace, crownFace, anchorFace];

        faces.push(spadesFace);
        faces.push(heartsFace);
        faces.push(diamondsFace);
        faces.push(cloverFace);
        faces.push(crownFace);
        faces.push(anchorFace);

        this._mat = new Mat(faces);

        let spadesBet = new Bet(spadesFace, 0);
        let heartsBet = new Bet(heartsFace, 0);
        let diamondsBet = new Bet(diamondsFace, 0);
        let cloverBet = new Bet(cloverFace, 0);
        let crownBet = new Bet(crownFace, 0);
        let anchorBet = new Bet(anchorFace, 0);

        let bets = [];
        bets.push(spadesFace);
        bets.push(heartsFace);
        bets.push(diamondsFace);
        bets.push(cloverFace);
        bets.push(crownFace);
        bets.push(anchorFace);

        this.bets = bets

        let dice = [];
        dice.push(new Die(faces));
        dice.push(new Die(faces));
        dice.push(new Die(faces));

        this.gameState = 0;
    }

    get gameState() {
        return this.gameState;
    }

    placeBet(spadesBetValue, heartsBetValue,...) {
        this._gameState = 1;
    }

}