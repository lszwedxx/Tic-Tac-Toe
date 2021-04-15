class Squer {
  constructor(num) {
    this.num = num;
    this.clicked = false;
  }
  getClicked = () => {
    return this.clicked;
  };
  addSign = (player) => {
    const squer = document.querySelector(`[data-number = "${this.num}"]`);
    squer.classList.contains("cross") || squer.classList.contains("circle")
      ? (this.clicked = true)
      : squer.classList.add(player.getSign());
  };
}

export default Squer;
