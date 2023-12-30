import axios from 'axios';

const API_KEY = "RGAPI-8733af08-de03-404b-8ab2-9c0997c854aa";

const USER_API = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

export function searchForPlayer (summonerName) {
    var APICallString = USER_API + summonerName + "?api_key=" + API_KEY;

    console.log(APICallString);

    axios.get(APICallString).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    })
}