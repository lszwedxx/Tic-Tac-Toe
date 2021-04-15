class Winner{
    constructor(){
        this.wrapper = document.querySelector(".wrapper")
        this.winner = document.querySelector(".wrapper__winner")
        this.resetBtn = document.querySelector(".wrapper__reset-btn")
    }
    reset(player){
        this.wrapper.classList.add("wrapper--win")
        this.winner.textContent = this.winner.textContent + player
        this.resetBtn.addEventListener("click",e => {
            window.location.reload()
          })
    }
    addMeeseeks(){
        const audio = document.querySelector("audio")
        audio.volume=0.2
        const meeseeks = document.createElement("img")
        meeseeks.src="https://upload.wikimedia.org/wikipedia/en/1/1d/Mr._Meeseeks.png"
        this.wrapper.appendChild(meeseeks)
        meeseeks.classList.add("meeseeks")
        audio.play()
    }
}

export default Winner