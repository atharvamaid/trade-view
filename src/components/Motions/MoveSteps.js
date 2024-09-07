import React, { useCallback, useState } from "react";
import { useAppProvider } from "../../context/AppProvider";
export const MoveSteps = () => {
  const [steps, setSteps] = useState(10);
  const onActionClick = useCallback((e) => {
    if (e.target.nodeName === "INPUT") return;
    const element = document.getElementById("cat-sprite-icon");
    element.style.left = `${element.offsetLeft + parseInt(steps)}px`;
    element.style.top = element.offsetTop;
  }, [steps]);
  return (
    <div
      onClick={onActionClick}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Move
      <input
        value={steps}
        className="text-black text-center w-10 mx-2"
        type="number"
        onChange={(e) => setSteps(e.target.value)}
      />
      &nbsp; Steps
    </div>
  );
};
