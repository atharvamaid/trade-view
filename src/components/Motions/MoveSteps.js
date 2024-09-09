import { Card, CardContent, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useAppProvider } from "../../context/AppProvider";

export const MoveSteps = ({ spriteId }) => {
  const { totalSprites, setTotalSprites } = useAppProvider();
  const currentSprite = totalSprites?.find((sprite) => sprite.id === spriteId);
  const [steps, setSteps] = useState(currentSprite?.steps);

  const onActionClick = useCallback(
    (e) => {
      if (e.target.nodeName === "INPUT") return;
      const element = document.getElementById(`cat-sprite-icon-${spriteId}`);
      element.style.left = `${element.offsetLeft + parseInt(steps)}px`;
      element.style.top = element.offsetTop;
      setTotalSprites((prevItems) =>
        prevItems?.map((item) =>
          item?.id === currentSprite?.id
            ? { ...item, steps: parseInt(steps) }
            : item
        )
      );
    },
    [steps, spriteId, currentSprite, totalSprites]
  );
  const onStepsChange = (e) => {
    setSteps(parseInt(e.target.value));
    setTotalSprites((prevItems) =>
      prevItems?.map((item) =>
        item?.id === currentSprite?.id
          ? { ...item, steps: parseInt(e.target.value) }
          : item
      )
    );
  };
  return (
    <Card sx={{ minWidth: 220 , backgroundColor : "#1976d2", height:60}} onClick={onActionClick}>
      <CardContent>
        <Typography className="text-white" variant="p" component="div">
          {"Move "}
          <input
            value={steps}
            className="text-black text-center w-10 mx-2"
            type="number"
            onChange={onStepsChange}
          />
          {"Step"}
        </Typography>
      </CardContent>
    </Card>
  );
};
