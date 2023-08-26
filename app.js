const symGame = [
    "✌",
    "✊",
    "🖐"
]
const score = document.getElementById("score")
const _taruhan = document.getElementById("_taruhan")
const playerSound = document.getElementById("player-sound")
const btnPlay = document.getElementById("button-play")
const btnStop = document.getElementById("button-stop")
const rules = document.getElementById("_rules")
let result = false
let taruhan = _taruhan.value
let firstCredit = 20000
let totalWin = 0
let winner = document.getElementById("win")
let lastCredit = document.getElementById("credit")
lastCredit.value = firstCredit

function play(prepend=true) {
  result = prepend
  
  if (!result) return false
  
  const sym = setInterval(() => {
    if (!result) clearInterval(sym)
    
    return randSym()
  }, 600)
}

function randSym() {
  const bot = document.getElementById('bot')
  const player = document.getElementById('player')
  const randBot = Math.floor(Math.random()*3)
  
  setTimeout(function(){
    bot.innerHTML = symGame[0]
    player.innerHTML = symGame[0]
  }, 200)
  setTimeout(function(){
    bot.innerHTML = symGame[1]
    player.innerHTML = symGame[1]
  }, 400)
  setTimeout(function(){
    bot.innerHTML = symGame[2]
    player.innerHTML = symGame[2]
  }, 600)
  
  player.onclick = function() {
    playerSound.play()
    if (lastCredit.value < 1 || lastCredit.value < -1) {
      alert("Credit not enough, please charge again.")
      play(false)
      btnPlay.classList.remove("disabled")
      btnPlay.classList.add("enabled")
      btnPlay.innerHTML = "Play"
      lastCredit.value = 0
    }
    
    switch (this.innerHTML) {
      case "✌":
        checkWin(0, randBot)
        break;
      case "✊":
        checkWin(1, randBot)
        break;
      case "🖐":
        checkWin(2, randBot)
        break;
    }
  }
}

function checkWin(player, bot) {
  if (player === 0 && bot === 2) {
    score.innerHTML = `
      Anda : ${symGame[player]}<br/>
      Bot: ${symGame[bot]}<br/>
      Menang: Anda menang!
    `
    
    totalWin = totalWin + 1
    
    if (totalWin === 2) {
      winner.innerHTML = "win : " + _taruhan.value * 2
      taruhan = _taruhan.value * 2
      firstCredit = firstCredit + taruhan
      lastCredit.value = firstCredit
    }
  }
  else if (player === 1 && bot === 0) {
    score.innerHTML = `
      Anda : ${symGame[player]}<br/>
      Bot: ${symGame[bot]}<br/>
      Menang: Anda menang!
    `
    
    totalWin = totalWin + 1
    
    if (totalWin === 2) {
      winner.innerHTML = "win : " + _taruhan.value * 2
      taruhan = _taruhan.value * 2
      firstCredit = firstCredit + taruhan
      lastCredit.value = firstCredit
    }
  }
  else if (player === 2 && bot === 1) {
    score.innerHTML = `
      Anda : ${symGame[player]}<br/>
      Bot: ${symGame[bot]}<br/>
      Menang: Anda menang!
    `
    
    totalWin = totalWin + 1
    
    if (totalWin === 2) {
      winner.innerHTML = "win : " + _taruhan.value * 2
      taruhan = _taruhan.value * 2
      firstCredit = firstCredit + taruhan
      lastCredit.value = firstCredit
    }
  }
  else if (bot === 0 && player === 2) {
    score.innerHTML = `
      Anda : ${symGame[player]}<br/>
      Bot: ${symGame[bot]}<br/>
      Menang: Anda kalah!
    `
    
    totalWin = 0
    
    winner.innerHTML = ""
    taruhan = _taruhan.value
    firstCredit = firstCredit - taruhan
    lastCredit.value = firstCredit
  }
  else if (bot === 1 && player === 0) {
    score.innerHTML = `
      Anda : ${symGame[player]}<br/>
      Bot: ${symGame[bot]}<br/>
      Menang: Anda kalah!
    `
    
    totalWin = 0
    
    winner.innerHTML = ""
    taruhan = _taruhan.value
    firstCredit = firstCredit - taruhan
    lastCredit.value = firstCredit
  }
  else if (bot === 2 && player === 1) {
    score.innerHTML = `
      Anda : ${symGame[player]}<br/>
      Bot: ${symGame[bot]}<br/>
      Menang: Anda kalah!
    `
    
    totalWin = 0
    
    winner.innerHTML = ""
    taruhan = _taruhan.value
    firstCredit = firstCredit - taruhan
    lastCredit.value = firstCredit
  } else {
    score.innerHTML = `
      Anda : ${symGame[player]}<br/>
      Bot: ${symGame[bot]}<br/>
      Menang: Seri!
    `
    
    totalWin = 0
    winner.innerHTML = ""
  }
}

/*const btnUp = document.getElementById("up")
const btnDown = document.getElementById("down")*/


btnPlay.onclick = () => {
  if (lastCredit.value < 1 || lastCredit.value < -1) {
    alert("Credit not enough, please charge again.")
    return false
  }
  
  if (btnPlay.classList.contains("enabled")) {
    btnPlay.classList.remove("enabled")
    btnPlay.classList.add("disabled")
    btnPlay.innerHTML = "Stop"
    _taruhan.disabled = true
    return play(true)
  } else if (btnPlay.classList.contains("disabled")) {
    btnPlay.classList.remove("disabled")
    btnPlay.classList.add("enabled")
    btnPlay.innerHTML = "Play"
    _taruhan.disabled = false
    return play(false)
  }
}
btnStop.onclick = () => play(false)

rules.onclick = () => {
  const msg = document.getElementById("_msg")
  if (!msg.classList.contains("show")) {
    msg.classList.add("show")
    msg.classList.remove("hide")
  } else {
    msg.classList.add("hide")
    msg.classList.remove("show")
  }
}

/*btnUp.onclick = () => {
  
  if (_taruhan.value == 1000) {
    return false
  }
  
  taruhan = _taruhan.value++
}

btnDown.onclick = () => {
  
  if (_taruhan.value == 1) {
    return false
  }
  
  taruhan = _taruhan.value--
}*/