import { useState } from 'react'
import './../App.css'

function CreateGame() {
  const [choice, setChoice] = useState();
  const [numPlayers, setNumPlayers] = useState();
  const [username, setUsername] = useState();
  const minPlayers = 5;
  const maxPlayers = 10;

  return (
    <>
      <label>
        What is your username ?
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />

      <label>
        Are you part of the game ?
        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <br />
      <br />

      <label>
        How many players are in the game ?
        <select
          value={numPlayers}
          onChange={(e) => setChoice(e.target.value)}
          disabled={!choice}
        >
          {Array.from({ length: maxPlayers - minPlayers + 1 }, (_, i) => (
            <option key={i} value={i + minPlayers}>
              {i + minPlayers}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />


    </>
  );
}

export default CreateGame
  
