var express = require('express')
var cors = require('cors')
const axios = require('axios');

var app = express()
app.use(cors());


const API_KEY = "RGAPI-222e6187-3ef8-4855-847e-8b0361697b71";

function getPlayerPUUID(playerName, playerTag) {
    return axios.get("https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + playerName + "/" + playerTag + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => err);
}

function getMatches(puuid, count) {
    return axios.get("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=" + count + "&api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => err);
}

function getUserData(puuid) {
    return axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" + puuid + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => err);
}

app.get('/user', async (req, res) => {
    const name = req.query.name;
    const tag = req.query.tag;

    const userdata = await getPlayerPUUID(name, tag);

    const PUUID = userdata.puuid;

    const playerData = await getUserData(PUUID)
    res.json({playerData});
});


app.listen(4000, () => {
    console.log("Server started on 4000.")
});