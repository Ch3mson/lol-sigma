
const getMatchData = async (matchKey) => {
    return axios.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + matchKey + "?api_key=" + API_KEY)
        .then(response => {
            return response.data.info.participants;
        }).catch(err => {
            console.log(err);
        })
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

    for (let i = 0; i < matchData.length; i++) {
            var didTheyWin = await wonAgainstMe(matchData, PUUID, matchData[i].puuid)
            console.log(matchData[i].puuid + " who belongs to: " + matchData[i].riotIdGameName + " who: " + didTheyWin);
    }
}



getMyUser(testPUUID, testMatch)