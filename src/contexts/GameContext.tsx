import { createContext } from "react";

export const gameContextData = {
  horizontalBoxCount: 10,
  verticalBoxCount: 30,
};

export const GameContext = createContext(gameContextData);
