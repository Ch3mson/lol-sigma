var express = require('express')
var cors = require('cors')
const axios = require('axios');

var app = express()


const API_KEY = "RGAPI-e3059c24-7b56-43d0-bba3-8f6870da3c2d";

function getPlayerPUUID(playerName, playerTag) {
    return axios.get("https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + playerName + "/" + playerTag + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(err => err);
}




app.get('/games', async (req, res) => {
    const name = "JAMAULS BBC";
    const tag = "69420";
    const userdata = await getPlayerPUUID(name, tag);

    res.json(userdata);
});


app.listen(4000, () => {
    console.log("Server started on 4000.")
});