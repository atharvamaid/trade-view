import { ResetButton } from "./ResetButton";
import React, { useCallback } from "react";
import { useAppProvider } from "../../context/AppProvider";

export const ResetAnimation = () => {
  const { isResetClicked, clonedMotions, setClonedMotions, setTotalSprites } =
    useAppProvider();
  const onResetClick = useCallback(() => {
    isResetClicked.current = true;
    const tempCloneMotion = structuredClone(clonedMotions);
    for (let sprite in tempCloneMotion) {
      tempCloneMotion[sprite] = [];
    }
    setTotalSprites((prevItems) =>
      prevItems.map((item) => {
        const element = document.getElementById(`cat-sprite-icon-${item.id}`);
        const parent = document.getElementById("preview-container");
        const newXCoordinate = 0 + parent.offsetWidth / 2;
        const newYCoordinate = -0 + parent.offsetHeight / 2;
        element.style.left = `${newXCoordinate}px`;
        element.style.top = `${newYCoordinate}px`;
        element.style.transform = `translate(-50%, -50%) rotate(${0}deg)`;
        return { ...item, angle: 0, steps: 10, x: 34, y: 65, degree: 15 };
      })
    );
    setClonedMotions(tempCloneMotion);
  }, [clonedMotions, setClonedMotions]);
  return <ResetButton onClick={onResetClick} />;
};
