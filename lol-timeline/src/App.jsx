import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Overview from './components/overview';

function App() {

  const [searchText, setSearchText] = useState("");
  const API_KEY = "RGAPI-827965d6-c6b8-4fd5-9506-79f603fa2bce";
  const [playerData, setPlayerData] = useState({});

  function searchForPlayer(event) {
    
    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    console.log(APICallString);

    axios.get(APICallString).then(function (response) {
      //success:
      console.log(response.data);
      setPlayerData(response.data);
    }).catch(function (error){
      // catching error
      console.log(error);
    })
  }

  return (
    <>

      <div className="flex flex-col items-center p-3">
        <>
          <div className="flex">
            <input 
              type="text" 
              className="py-2 px-4 rounded-l bg-[#25234a] text-white focus:outline-none w-80 h-12" // Set height with h-12
              placeholder="Enter Summoner Name"
              onChange={e => setSearchText(e.target.value)}
            />
            
            <button 
              className="py-2 px-4 rounded-r bg-[#25234a] text-white hover:bg-[#444087] focus:outline-none h-12" // Set height with h-12
              onClick={e => searchForPlayer(e)}
            >
              Search for player
            </button>
          </div>
        </>   
      </div>
        {JSON.stringify(playerData) != '{}' ? 
              <>
                <Overview/>
                {/* <p>{playerData.name}</p>
                <p>{playerData.summonerLevel}</p>
                <img src={"https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/" + playerData.profileIconId + ".png"}></img> */}
              </>
              :
              <><p>No Player Data</p></>
              }

    </>
  )
}

export default App
