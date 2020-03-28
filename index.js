const player = require('play-sound')();

async function main() {
  const people = 12;
  let count = 0;
  
  const teams = {
    'house1': [],
    'house2': [],
    'house3': [],
  }

  const teamsLength = Object.keys(teams).length;
  const peopleForTeam = people/teamsLength;

  for (let i = 0; i <= 12; i++) {
    const teamsNames = await shuffle(Object.keys(teams));
    for (const team of teamsNames) {
      if(teams[team].length < peopleForTeam) {
        await player.play(`./sounds/${team}.mp3`, (err) => {
          if (err) console.log(`Could not play sound: ${err}`);
       });
       teams[team].push('Ocuppied')
        count++;
        break;
      }
    }
  }

  await player.play(`./sounds/nut.mp3`, (err) => {
    if (err) console.log(`Could not play sound: ${err}`);
  });

}

async function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

main();
