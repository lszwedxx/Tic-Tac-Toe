import Squer from "./squer.js";
import Player from "./player.js";
import Winner from "./winner.js"
class Game {
  constructor() {
    this.squers = document.querySelectorAll(".squer")
    this.playerX = new Player("Player1", "cross");
    this.playerO = new Player("Player2", "circle");
    this.actualPlayer = this.playerX;
    this.winner = new Winner()
    this.clickedSquers = 0;
    this.winCombination = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }
  changeRound = (e) => {
    if(this.checkIfWin(this.actualPlayer.sign)){
      this.winner.reset(` ${this.actualPlayer.name}`)
    }else if(this.clickedSquers===8){
      this.winner.reset(" Mr Meeseeks")
      this.winner.addMeeseeks()
    }
    else {
      this.clickedSquers++;
      this.actualPlayer === this.playerX ? 
      this.actualPlayer = this.playerO :
      this.actualPlayer = this.playerX
    }
  };
  checkIfWin =(player) => {
   const result = this.winCombination.some(combination => {
      return combination.every(index => {
        return this.squers[index].classList.contains(player)
      })
    })
    return result
  }
  render = () => {
    this.squers.forEach((sq, index) => {
      const squer = new Squer(index);
      sq.dataset.number = index;
      sq.addEventListener("click", (e) => {
      const s = e.target.getAttribute("data-number");
        squer.addSign(this.actualPlayer);
        let resp = squer.getClicked();
        resp == false
          ? this.changeRound()
          : null;
      });
    });
  };
}

export default Game;
