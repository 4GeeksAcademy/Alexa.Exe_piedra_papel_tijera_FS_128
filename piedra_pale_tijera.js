const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
};

const jugar = (userChoise) => {
const computerChoise = choises[Math.floor(Math.random()*choises.length)];
let resultado = "";

if (userChoise === computerChoise){
  resultado=`(la compu elijió: ${computerChoise})
  Empate 😼😼😼`;
} else if (rules[userChoise].includes(computerChoise)){
  resultado=`(la compu elijió: ${computerChoise})
  Ganéééééé 🤩🤩🤩`;
  }else{
    resultado=`(La compu eligió ${computerChoise})
    Perdí 😩😩😩 `;
  }

document.getElementById("resultado").innerText = resultado;
}

