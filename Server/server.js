var express = require('express');
var cors = require('cors');
const { connectToDb, getDb } = require('./db');
const mongoose = require('mongoose'); // Require Mongoose
const User = require('./models/userModel');
const fetch = require('node-fetch');
const axios = require('axios');

const app = express();
app.use(cors());

require('dotenv').config();

let db
connectToDb((err) => {
     if (!err) {
        app.listen(4000, () => {
            console.log("Express started on 4000");
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


app.get('/users/:PUUID', (req, res) => {
    db.collection('users')
        .findOne({PUUID: req.params.PUUID})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'could not fetch documents'})
        })
})

app.get('/ch3mson', async (req, res) => {
    const playerName = "Ch3mson";
    const DATA = await getPlayerPUUID(playerName);
    res.json(DATA);
})

const getPlayerPUUID = async (name) => {
    try {
        const response = await axios.get("https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Ch3mson/69420?api_key=RGAPI-046e9079-c21e-41d3-9ea2-1f84b0173f10");
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error(err);
        return err;
    }
}
