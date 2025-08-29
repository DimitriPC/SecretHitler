import { useState, useEffect } from 'react';
import { useSocket } from '../SocketContext';
import './../App.css';


function WaitingRoom() {

  const socket = useSocket();
  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (!socket) return;

    
    socket.on("connect", () => {
      socket.emit("waiting", socket.id);
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
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
}

export default WaitingRoom
  
