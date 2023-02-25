import { useContext } from "react";
import { GridContext } from "../contexts/GridContext";
import "../styles/display.scss";

function Display() {
  const gridData = useContext(GridContext);
  console.log(gridData);

  const renderGrid = () =>
    gridData.map((horizontalData, i) => (
      <div key={`gridRow${i}`} className="grid-row">
        {horizontalData.map((d, j) => (
          <div key={`gridItem${i}${j}`} className="grid-item" />
        ))}
      </div>
    ));

  return <div className="display">{renderGrid()}</div>;
}

export default Display;
