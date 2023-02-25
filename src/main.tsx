import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameContext, gameContextData } from "./contexts/GameContext";
import { GridContext, gridContextData } from "./contexts/GridContext";
import "./styles/reset.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GameContext.Provider value={gameContextData}>
      <GridContext.Provider value={gridContextData}>
        <App />
      </GridContext.Provider>
    </GameContext.Provider>
  </React.StrictMode>
);
