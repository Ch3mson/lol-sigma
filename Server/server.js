var express = require('express');
var cors = require('cors');
const { connectToDb, getDb } = require('./db');
const mongoose = require('mongoose'); // Require Mongoose
const User = require('./models/userModel');

const app = express();
app.use(cors());
require('dotenv').config();

let db
connectToDb((err) => {
     if (!err) {
        app.listen(3000, () => {
            console.log("Server started on 3000");
        });
        db = getDb();
     }
})

app.get('/users', (req, res) => {

    let users = [];

    db.collection('users')
        .find()
        .sort()
        .forEach(user => users.push(user))
        .then(() => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch documents'});
        }) // either toArray or forEach
}) 

// dealing with match ID's

// MatchID -> Find your puuid -> find chap u used -> add wr with teamates champions -> subtract wr with opposing teams winrates

/*
const testMatch = "NA1_4879780745";
const testPUUID = "JxR9JLMxhktNtSTcAn6i-OJdn557OK5MiyMMOqchefDizYxb6QnN1Old-8st9ba4DX-zxbSzLQmlZA";


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
    const matchList = await getMatches(PUUID, 10)

    const playerData = await getUserData(PUUID)
    res.json({playerData: playerData, matchList: matchList}); 
});


  */