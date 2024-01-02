import React from 'react';


function Home() {
    return (
        <div className="flex flex-col justify-center items-center pt-8">
            <p className="text-2xl font-bold text-gray-300 pb-5">LoL-Timeline</p>
            <p className="text-l font-medium text-gray-300 w-[900px] text-center leading-loose pb-5">
                A website designed to track your League of Legends profile and data of your past games.
            </p>
            <p className="text-l font-medium text-gray-300 w-[900px] text-center leading-loose">
                The goal of lol-timeline is to help you determine whether you should dodge in certain matchups, by giving information on your past winrate against certain champions, 
                your overall K/DA against them, as well as your teamates. Enter your username and tagline to see more information about yourself!
            </p>
        </div>
    )
}

export default Home;