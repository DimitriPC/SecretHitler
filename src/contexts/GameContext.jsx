import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({children}) {
    const [username, setUsername] = useState("");
    const [gamecode, setGameCode] = useState("");

    return (
        <GameContext.Provider value={{username, setUsername, gamecode, setGameCode}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext);
}