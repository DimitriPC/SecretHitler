import { useState } from 'react'
import './../App.css'
import CreateGame from './CreateGame.jsx'
import { Link } from 'react-router-dom'

function JoinGame() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <label for="gameCode">Join Game</label><br />
        <input type="text" id="gameCode" name="gameCode" /><br /><br />
      </form>
      <Link to="/CreateGame">Do you want to create a game ?</Link>
    </>
  )
}

export default JoinGame
  
