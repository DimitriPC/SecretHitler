import "./../App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext";

function JoinGame() {
  const {setGameCode, setUsername} = useGame();
  const [localGameCode, setLocalGameCode] = useState("");
  const [localUsername, setLocalUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername(localUsername);
    setGameCode(localGameCode);

    navigate("/WaitingRoom");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Join Game</label>
        <br />
        <input
          type="text"
          value={localGameCode}
          onChange={(e) => setLocalGameCode(e.target.value)}
        />
        <br />
        <br />
        <label>Username</label>
        <br />
        <input
          type="text"
          value={localUsername}
          onChange={(e) => setLocalUsername(e.target.value)}
          disabled={!localGameCode}
        />
        <br />
        <br />
        <button type="submit" disabled={!localUsername || !localGameCode}>
          Enter
        </button>
      </form>
      <br />
      <Link to="/CreateGame">Do you want to create a game ?</Link>
    </>
  );
}

export default JoinGame;
