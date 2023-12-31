import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Overview from './components/overview';

function App() {

  const [searchText, setSearchText] = useState("");
  const [tagLine, setTagLine] = useState("");
  const API_KEY = "RGAPI-e3059c24-7b56-43d0-bba3-8f6870da3c2d";
  const [playerData, setPlayerData] = useState({});


  function searchForPlayer(event) {
    
    var APICallString = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + searchText + "/" + tagLine + "?api_key=" + API_KEY;
    console.log(APICallString);


    axios.get(APICallString, { 'headers' : { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}  } ).then(function (response) {
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
          <div className="flex flex-row space-x-2">
            <input 
              type="text" 
              className="py-5 px-4 rounded bg-[#25234a] text-white focus:outline-none w-80 h-12" // Set height with h-12
              placeholder="Enter Summoner Name"
              onChange={e => setSearchText(e.target.value)}
            />

            <input 
              type="text" 
              className="py-2 px-4 rounded bg-[#25234a] text-white focus:outline-none w-40 h-12" // Set height with h-12
              placeholder="Tagline #"
              onChange={e => setTagLine(e.target.value)}
            />
            
            <button 
              className="py-2 px-4 rounded bg-[#25234a] text-white hover:bg-[#444087] focus:outline-none h-12" // Set height with h-12
              onClick={e => searchForPlayer(e)}
            >
              Search for player
            </button>
          </div>
        </>   
      </div>
        {JSON.stringify(playerData) != '{}' ? 
              <>
                <Overview name={playerData.name} profID={playerData.profileIconId} />
              </>
              :
              <><p>No Player Data</p></>
              }

    </>
  )
}

export default App
