import { Card, CardContent, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useAppProvider } from "../../context/AppProvider";

export const TurnDegrees = ({ spriteId }) => {
  const { angles, setAngles, totalSprites, setTotalSprites } = useAppProvider();
  const currentSprite = totalSprites?.find((sprite) => sprite.id === spriteId);
  const [degrees, setDegrees] = useState(currentSprite?.degree);
  const onActionClick = useCallback(
    (e) => {
      if (e.target.nodeName === "INPUT") return;
      const element = document.getElementById(`cat-sprite-icon-${spriteId}`);
      element.style.transform = `translate(-50%, -50%) rotate(${
        currentSprite?.angle + degrees
      }deg)`;
      setTotalSprites((prevItems) =>
        prevItems?.map((item) =>
          item?.id === currentSprite?.id
            ? { ...item, angle: currentSprite?.angle + degrees }
            : item
        )
      );
    },
    [degrees, angles, setAngles, spriteId, currentSprite, totalSprites]
  );
  const onDegreesChange = (e) => {
    setDegrees(parseInt(e.target.value));
    setTotalSprites((prevItems) =>
      prevItems?.map((item) =>
        item?.id === currentSprite?.id
          ? { ...item, degree: parseInt(e.target.value) }
          : item
      )
    );
  };
  return (
    <Card
      onClick={onActionClick}
      sx={{ minWidth: 220, backgroundColor: "#1976d2", height:60}}
    >
      <CardContent>
        <Typography className="text-white" variant="p" component="div">
          {"Turn"}
          <input
            type="number"
            value={degrees}
            className="text-black text-center w-10 mx-2"
            onChange={onDegreesChange}
          />
          {"degrees"}
        </Typography>
      </CardContent>
    </Card>
  );
};
