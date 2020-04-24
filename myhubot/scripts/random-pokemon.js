// Description:
//     Return a random pokemon
// Commands:
//     hubot random - Returns a random pokemon with some informations on it
const fetch = require('node-fetch');

const randompoke = async () => {
  const pokerand=Math.floor(Math.random() * (151 - 1 + 1) + 1);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokerand}`, {
    method:'GET',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'timeout': '5000',
    },
  })
  const poke = await response.json();
  const poke1 = {
    name: poke.forms[0].name,
    height: poke.height,
    species: poke.species.name,
    sprite: poke.sprites.front_default,
    type: poke.types[0].type.name,
    weight: poke.weight
  };
  const datatext = `\`\`\`Nom: ${poke1.name}\nEspèce: ${poke1.species}\nType: ${poke1.type}\nTaille: ${poke1.height}\nPoid: ${poke1.weight}\`\`\`\n${poke1.sprite}`
  return datatext;
}

module.exports = function(robot) {
  robot.respond(/random/i, (request) => {
    randompoke().then(datatext => request.send(datatext));
  })
};
