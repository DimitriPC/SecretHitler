import './../App.css';
import { useState, useEffect } from 'react';
import { useSocket } from '../SocketContext';
import { useGame } from "../contexts/GameContext";



function WaitingRoom() {

  const socket = useSocket();
  const {username, gamecode} = useGame();

  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (!socket) return;

    
    socket.on("connect", () => {
      socket.emit("waiting", username);
    });

    socket.on("waiting", (userList) => {
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
      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default WaitingRoom
  
