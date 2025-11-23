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
console.log("userChoise: ",userChoise);
console.log("computerChoise: ", computerChoise);

if (userChoise === computerChoise){
  console.log("Empate 😼😼😼");
  
} else if (rules[userChoise].includes(computerChoise)){
  console.log("Ganéééééé 🤩🤩🤩");
  
  }else{
    console.log("Perdí 😩😩😩");
}

}

jugar("rock");