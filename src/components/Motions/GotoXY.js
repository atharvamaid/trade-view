import { useCallback, useState } from "react";
import React from "react";

export const GotoXY = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const onActionClick = useCallback((e)=>{
    if (e.target.nodeName === "INPUT") return;
    const element = document.getElementById("cat-sprite-icon");
    const parent = document.getElementById("preview-container");
    const newXCoordinate = coordinates.x + parent.offsetWidth / 2;
    const newYCoordinate = -coordinates.y + parent.offsetHeight / 2;
    element.style.left = `${newXCoordinate}px`;
    element.style.top = `${newYCoordinate}px`;
  },[coordinates])
  return (
    <div onClick={onActionClick} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
      {"Go To x:"}
      <input
        type="number"
        value={coordinates.x}
        className="text-black text-center w-10 mx-2"
        onChange={(e) => setCoordinates({ ...coordinates, x: parseInt(e.target.value) })}
      />
      {"y:"}
      <input
        type="number"
        value={coordinates.y}
        className="text-black text-center w-10 mx-2"
        onChange={(e) => setCoordinates({ ...coordinates, y: parseInt(e.target.value) })}
      />
    </div>
  );
};
