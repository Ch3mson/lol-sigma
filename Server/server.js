var express = require('express')
var cors = require('cors')
const axios = require('axios');
require('dotenv').config();


var app = express()
app.use(cors());

const API_KEY = process.env.API_KEY;

function getPlayerPUUID(playerName, playerTag) {
    return axios.get("https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + playerName + "/" + playerTag + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => {
            console.log(err);
        });
    }

function getMatches(puuid, count) {
    return axios.get("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=" + count + "&api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => {
            console.log(err);
        });
    }

function getUserData(puuid) {
    return axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" + puuid + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => {
            console.log(err);
        });
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