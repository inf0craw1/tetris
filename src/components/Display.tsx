import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import { GridContext } from "../contexts/GridContext";
import "../styles/display.scss";

type CurrentBlockType = {
  blockType: number;
  direction: number;
  location: {
    x: number;
    y: number;
  };
};

function Display() {
  const gameData = useContext(GameContext);
  const gridData = useContext(GridContext);
  const [currentBlock, setCurrentBlock] = useState<CurrentBlockType>({
    blockType: 1,
    direction: 0,
    location: {
      x: 4,
      y: 0,
    },
  });

  const windowKeyListener = (e: KeyboardEvent) => {
    console.log(e);
    if (e.key === " ") {
      setCurrentBlock((prev) => {
        return {
          ...prev,
          direction: prev.direction === 3 ? 0 : prev.direction + 1,
        };
      });
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    window.addEventListener("keydown", windowKeyListener, {
      signal: abortController.signal,
    });
    return () => abortController.abort();
  });

  const renderGrid = () =>
    gridData.map((horizontalData, i) => (
      <div key={`gridRow${i}`} className="grid-row">
        {horizontalData.map((d, j) => (
          <div key={`gridItem${i}${j}`} className="grid-item" />
        ))}
      </div>
    ));

  const renderCurrentBlock = () => (
    <div
      className="current-block-container"
      style={{
        top: currentBlock.location.y * gameData.boxSize,
        left: currentBlock.location.x * gameData.boxSize,
      }}
    >
      {gameData.block1.shapeOfDirection[currentBlock.direction].map(
        (row, i) => (
          <div key={`currentBlockGridRow${i}`} className="grid-row">
            {row.map((col, j) => (
              <div
                key={`currentBlockGridItem${i}${j}`}
                className="grid-item"
                style={
                  gameData.block1.shapeOfDirection[currentBlock.direction][i][j]
                    ? { backgroundColor: gameData.block1.color }
                    : {}
                }
              ></div>
            ))}
          </div>
        )
      )}
    </div>
  );

  return (
    <div className="display">
      <>
        {renderGrid()}
        {renderCurrentBlock()}
      </>
    </div>
  );
}

export default Display;
