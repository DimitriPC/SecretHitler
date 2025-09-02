import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({children}) {
    const [username, setUsername] = useState("");
    const [gamecode, setGameCode] = useState("");
    const [isHost, setIsHost] = useState(false);

    return (
        <GameContext.Provider value={{username, setUsername, gamecode, setGameCode, isHost, setIsHost}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext);
}