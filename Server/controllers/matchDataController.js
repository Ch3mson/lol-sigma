require('dotenv').config();


const testMatch = "NA1_4879780745";
const testPUUID = "JxR9JLMxhktNtSTcAn6i-OJdn557OK5MiyMMOqchefDizYxb6QnN1Old-8st9ba4DX-zxbSzLQmlZA";


const API_KEY = process.env.API_KEY;


const getMatchData = async (MatchID) => {

const MATCHURL = `https://americas.api.riotgames.com/lol/match/v5/matches/${MatchID}?api_key=${API_KEY}`
    try {
      const response = await fetch(MATCHURL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      console.error("Error fetching match data:", error);
      throw error;
    }
  }
  

async function wonAgainstMe(matchData, yourPUUID, otherPlayersPUUID) {

    var playerPosn = 0;
    for (let i = 0; i < matchData.length; i++) {
        if (matchData[i].puuid == yourPUUID) {
            playerPosn = i;
        }
    }

    var didIWin = matchData[playerPosn].win;

    function playerWin(PUUID) {
        for (let i = 0; i < matchData.length; i++) {
            if (PUUID == matchData[i].puuid) {
                return matchData[i].win;
            }
        }
    }

    if (didIWin && playerWin(otherPlayersPUUID)) {
        return (" won with you.");
    } else if (didIWin && !playerWin(otherPlayersPUUID)) {
        return (" lost to you.");
    } else if (!didIWin && playerWin(otherPlayersPUUID)) {
        return (" beat you.");
    } else if (!didIWin && !playerWin(otherPlayersPUUID)) {
        return (" lost with you.");
    } else {
        return (" SOMETHINGS WRONG HERE!");
    }

}

async function getMyUser(PUUID, matchKey) {
    const matchData = await getMatchData(matchKey);
    const participantData = matchData.info.participants;


    for (let i = 0; i < participantData.length; i++) {

            var didTheyWin = await wonAgainstMe(participantData, PUUID, participantData[i].puuid)
            console.log(participantData[i].puuid + " who belongs to: " + participantData[i].riotIdGameName + " who: " + didTheyWin);
    }
}



getMyUser(testPUUID, testMatch);