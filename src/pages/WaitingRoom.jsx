import './../App.css';
import { useState, useEffect } from 'react';
import { useSocket } from '../SocketContext';
import { useGame } from "../contexts/GameContext";



function WaitingRoom() {

  const socket = useSocket();
  const {username, gamecode, isHost} = useGame();

  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (!socket) return;

    
    socket.on("connect", () => {
      isHost ? socket.emit("gamecode") : null;
      socket.emit("waiting", username);
      
    });

    socket.on("waiting", (userList) => { //devrait recevoir gamecode aussi
      setUsers(userList);
    })
    

    // Clean up the listener on unmount
    return () => {
      socket.off();
    };
  }, [socket]);
  

  return (
    <>
      <h2>Waiting room</h2>
      <br/>
      <h3>Game Code: {gamecode}</h3>
      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <br/>
      {isHost ? <button>Start game</button> : null }
    </>
  );
}

export default WaitingRoom
  
