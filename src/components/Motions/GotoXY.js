import { useCallback, useState } from "react";
import React from "react";
import { useAppProvider } from "../../context/AppProvider";
import { Card, CardContent, Typography } from "@mui/material";

export const GotoXY = ({ spriteId }) => {
  const { totalSprites, setTotalSprites } = useAppProvider();
  const currentSprite = totalSprites?.find((sprite) => sprite.id === spriteId);
  const [coordinates, setCoordinates] = useState({
    x: currentSprite?.x,
    y: currentSprite?.y,
  });
  const onActionClick = useCallback(
    (e) => {
      if (e.target.nodeName === "INPUT") return;
      const element = document.getElementById(`cat-sprite-icon-${spriteId}`);
      const parent = document.getElementById("preview-container");
      const newXCoordinate = coordinates.x + parent.offsetWidth / 2;
      const newYCoordinate = -coordinates.y + parent.offsetHeight / 2;
      element.style.left = `${newXCoordinate}px`;
      element.style.top = `${newYCoordinate}px`;
      setTotalSprites((prevItems) =>
        prevItems.map((item) =>
          item?.id === currentSprite?.id
            ? {
                ...item,
                x: coordinates.x,
                y: coordinates.y,
              }
            : item
        )
      );
    },
    [coordinates, spriteId]
  );
  const onCoordinatesChange = (e) => {
    setCoordinates({
      ...coordinates,
      [e.target.name]: parseInt(e.target.value),
    });
    setTotalSprites((prevItems) =>
      prevItems.map((item) =>
        item?.id === currentSprite?.id
          ? {
              ...item,
              [e.target.name]: parseInt(e.target.value),
            }
          : item
      )
    );
  };
  return (
    <Card
      onClick={onActionClick}
      sx={{ minWidth: 220, backgroundColor: "#1976d2", height:60 }}
    >
      <CardContent>
        <Typography className="text-white" variant="p" component="div">
          {"Go To x:"}
          <input
            type="number"
            value={coordinates.x}
            className="text-black text-center w-10 mx-2"
            onChange={onCoordinatesChange}
            name="x"
          />
          {"y:"}
          <input
            type="number"
            value={coordinates.y}
            className="text-black text-center w-10 mx-2"
            onChange={onCoordinatesChange}
            name="y"
          />
        </Typography>
      </CardContent>
    </Card>
  );
};
