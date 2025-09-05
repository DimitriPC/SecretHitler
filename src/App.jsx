import { Routes, Route } from "react-router-dom";

import "./App.css";

import JoinGame from "./pages/JoinGame.jsx";
import CreateGame from "./pages/CreateGame.jsx";
import WaitingRoom from "./pages/WaitingRoom.jsx";
import { SocketProvider } from "./SocketContext.jsx";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <SocketProvider>
              <JoinGame />
            </SocketProvider>
          }
        />
        <Route path="/CreateGame" element={<CreateGame />} />
        <Route
          path="/WaitingRoom"
          element={
            <SocketProvider>
              <WaitingRoom />
            </SocketProvider>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
