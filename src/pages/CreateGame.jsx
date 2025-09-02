import { useState } from "react";
import "./../App.css";
import { useGame } from "../contexts/GameContext";

function CreateGame() {
  const [choice, setChoice] = useState();
  const [numPlayers, setNumPlayers] = useState();
  const [username, setLocalUsername] = useState();
  const minPlayers = 5;
  const maxPlayers = 10;
  const randomChars = Math.random.toString(36).substring(2, 7);

  const { setUsername, setGameCode, setIsHost } = useGame();

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameCode(randomChars);
    setUsername(username);
    setIsHost(true);
    navigate("/WaitingRoom");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          What is your username ?
          <input
            type="text"
            value={username}
            onChange={(e) => setLocalUsername(e.target.value)}
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
            onChange={(e) => setNumPlayers(Number(e.target.value))}
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
        <button type="submit" disabled={!username || !choice || !numPlayers}>
          Enter
        </button>
      </form>
    </>
  );
}

export default CreateGame;
