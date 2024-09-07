import React, { useCallback, useState } from "react";
import { useAppProvider } from "../../context/AppProvider";

export const TurnDegrees = () => {
  const [degrees, setDegrees] = useState(0);
  const {angles, setAngles} = useAppProvider();
  const onActionClick = useCallback(
    (e) => {
      if (e.target.nodeName === "INPUT") return;
      const element = document.getElementById("cat-sprite-icon");
      element.style.transform = `translate(-50%, -50%) rotate(${angles.cat + degrees}deg)`;
      setAngles({...angles, cat : angles.cat + degrees})
    },
    [degrees,angles,setAngles]
  );
  return (
    <div
      onClick={onActionClick}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"Turn"}
      <input
        type="number"
        value={degrees}
        className="text-black text-center w-10 mx-2"
        onChange={(e) => setDegrees(parseInt(e.target.value))}
      />
      {"degrees"}
    </div>
  );
};
