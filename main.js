// Kung Fu Panda Character Look Up

// Variables for HTML Elements
let characterH2 = document.getElementById("character-name");
let characterImg = document.getElementById("main-img");
let characterQuote = document.getElementById("quote");

// Event Listener
document.getElementById('search').addEventListener('click', searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById('input-name').value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === 'po' || name === 'dragon warrior') {
    setCharacter("Po", "po", 'Buddy, I am the Dragon Warrior.');
  } else if (name === 'tigress' || name === 'master tigress') {
    setCharacter("Tigress", "tigress", 'That was pretty hardcore!');
  } else if (name === 'mantis' || name === 'master mantis') {
    setCharacter("Mantis", "mantis", 'Fear the bug!');
  } else if (name === 'monkey' || name === 'master monkey') {
    setCharacter("Monkey", "monkey", 'We should hang out.');
  } else if (name === 'crane' || name === 'master crane') {
    setCharacter("Crane", "crane", 'You can chain my body, but you will never chain my warrior spirit!');
  } else if (name === 'viper' || name === 'master viper') {
    setCharacter("Viper", "viper", "I don't need to bite to fight.");
  } else if (name === 'shifu' || name === 'master shifu') {
    setCharacter("Shifu", "shifu", 'There is now a level Zero.');
  } else if (name === 'ping' || name === 'mr. ping') {
    setCharacter("Mr-ping", "mr-ping", 'We are noodle folk, broth runs thorugh out veins!.');
  } else if (name === 'boss wolf' || name === 'villain wolf') {
    setCharacter("Boss Wolf", "boss-wolf", "Guess nobody told you: If you mess with the wolf, you get the fangs.");
  } else if (name === 'croc' || name === 'villain croc') {
    setCharacter("Croc", "croc", 'The only her in this town is a dead one!');
  } else if (name === 'kai' || name === 'villain kai') {
    setCharacter("Kai", "kai", "Soon, I will have your power, too!");
  } else if (name === 'shen' || name === 'villain shen') {
    setCharacter("Shen", "shen", "The only reason you are still alive is that I find your stupidity mildly amusing.");
  } else if (name === 'tai lung' || name === 'villain tai lung') {
    setCharacter("Tai Lung", "tai-lung", "Finally, a worthy opponent! Our battle will be legendary!");
  } else {
    setCharacter("?????", "question-mark", 'Character Not Found')
  }
}

// Update page to match selected character
function setCharacter(characterName, imgName, quote) {
  characterH2.innerHTML = characterName;
  characterImg.src = `img/${imgName}.png`
  characterQuote.innerHTML = quote;
}