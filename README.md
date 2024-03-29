<h1>About</h1>

<p>lol-timeline is a League of Legends web app that analyzes a players past games and displays stats based on their information. With this information, it will give better insight on how you play throughout the day, and which matchups you are strongest and weakest against, and allow you to determine whether you should dodge games or not.</p>

<h1>Purpose</h1>

<p>This is an beginner/intermediate project for me in learning how to make API calls using express, displaying them using React/Vite, and becoming better with TailwindCSS styling. Additionally, MongoDB will be used (eventually once i get there), to store user data, so players can constantly update their stats while they use the app, to avoid rate limits. As it is used more, players will have more up to date information on their user.</p>

<h1>Difficulties</h1>
<p>Being my first project, learning the code to start a server and database to handle requests took a super long time. Figuring out errors and ensuring these components work together has taken multiple weeks to figuring out. Another challenge is reformatting the data that is fetched by the Riot API. For every user, new documents must be made or updated, or be unchanged in the DB, and be stored in multiple nested documents. Note, to handle Riot API data, many functions were used in <mark>matchDataController</mark> to determine which character is played by the user, who the opposing champions are, and whether they won or lost against them. Then having all this data be updated within the DB.</p>


<h1>to-do list:</h1>
<ol>
  <li><s>Build client search bar to take user information</s></li>
  <li>Perform API calls through a server request</li>
  <li>Server updates information on MongoDB, checking if a new match is added or not. If it's a new match, update the database. if not, don't make changes.</li>
    <ul>
      <li><s>Use localhost</s></li>
      <li><s>Set up Google cloud</s></li>
    </ul>
  <li>Request database information about the user, and match the selected champion and opponents</li>
  <li>Display on client side</li>
  <li>completed!</li>
</ol>
<h1>Technologies</h1>
<ul>
  <li>React/Vite</li>
  <li>TailwindCSS</li>
  <li>Express</li>
  <li>(MongoDB)</li>
  <li>(Google CLoud)</li>
</ul>
