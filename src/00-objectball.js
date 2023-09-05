
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }

function numPointsScored(playerName) {
  let game = gameObject();
  let requestedPoints
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let playerObj = teamObj[teamKey]
        for (let player in playerObj) {
          if (player === playerName) {
            requestedPoints = playerObj[player].points
          }
        }
      }
    }
   }
   return requestedPoints
}

console.log(numPointsScored('Brendan Haywood'));

function shoeSize(playerName) {
  let game = gameObject()
  let playerObj
  for (let teamKey in game){
    let teamObj = game[teamKey]
    playerObj = teamObj.players[playerName] ? teamObj.players[playerName] : playerObj
  }
  return playerObj.shoe
}

console.log(shoeSize('Jeff Adrien'));

function teamColors (teamName) {
  let game = gameObject()
  if(game.away.teamName === teamName){
    return game.away.colors
  } else {return game.home.colors}
}

console.log(teamColors('Brooklyn Nets'))

function teamNames(game) {
  return [game.away.teamName, game.home.teamName]
  
}

console.log(teamNames(gameObject()));

function playerNumbers(team){
  let game = gameObject()
  let jerseyNumbers = []
  for(let teamKey in game){
    const {players, teamName} = game[teamKey]
    if(teamName === team){
      for(let player in players){
        let playerNumber = players[player].number
        jerseyNumbers.push(playerNumber)
      }
    }
  }
  return jerseyNumbers
}

console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
  let game = gameObject();
  let playerObj
  for (let teamKey in game){
    let teamObj = game[teamKey]
    if(teamObj.players[playerName]){
      playerObj = teamObj.players[playerName]
    }
  }
  return playerObj

}

console.log(playerStats('Brook Lopez'))
