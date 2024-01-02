import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Overview from './components/overview';
import Home from './components/home';

function App() {

  const [searchText, setSearchText] = useState("");
  const [tagLine, setTagLine] = useState("");

  const [playerData, setPlayerData] = useState({});

  function searchForPlayer(e) {
    axios.get("http://localhost:4000/user", { params: { name: searchText, tag: tagLine,}})
      .then(function (response) {
        setPlayerData(response.data.playerData);
        console.log(response.data.playerData);
      }).catch(function (error) {
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
              <><Home /></>
        }

    </>
  )
}

export default App
